"use client";

import { useState } from "react";
import { inquiryTypes } from "@/content/site";
import { Button } from "@/components/button";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !payload.ok) {
        setStatus("error");
        setMessage(payload.error ?? "Something went wrong. Please try again.");
        return;
      }

      form.reset();
      setStatus("success");
      setMessage("Thank you. Our team will respond to your enquiry.");
    } catch {
      setStatus("error");
      setMessage("Unable to send your message right now. Please email us directly.");
    }
  }

  const fieldClass =
    "mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-[var(--ink)] outline-none transition focus:border-[var(--blue)] focus:shadow-[0_0_0_4px_var(--glow)]";

  return (
    <form onSubmit={onSubmit} className="menu-panel relative rounded-[1.6rem] p-5 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Full name
          <input name="name" required minLength={2} maxLength={80} className={fieldClass} autoComplete="name" />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input name="email" type="email" required className={fieldClass} autoComplete="email" />
        </label>
        <label className="block text-sm font-medium">
          Organization
          <input name="organization" required minLength={2} maxLength={120} className={fieldClass} autoComplete="organization" />
        </label>
        <label className="block text-sm font-medium">
          Enquiry type
          <select name="type" required className={fieldClass} defaultValue="general">
            {inquiryTypes.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium sm:col-span-2">
          Message
          <textarea name="message" required minLength={20} maxLength={2000} rows={6} className={fieldClass} />
        </label>
      </div>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Company website
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Talk to Our Team"}
        </Button>
        {message ? (
          <p className={status === "error" ? "text-sm text-red-500" : "text-sm text-[var(--muted)]"} role="status">
            {message}
          </p>
        ) : (
          <p className="text-sm text-[var(--muted)]">We typically respond to institutional enquiries directly.</p>
        )}
      </div>
    </form>
  );
}
