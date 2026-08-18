import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const rateLimit = new Map<string, { count: number; reset: number }>();

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const current = rateLimit.get(ip);

  if (current && current.reset > now && current.count >= 6) {
    return NextResponse.json({ ok: false, error: "Please wait before sending another message." }, { status: 429 });
  }

  rateLimit.set(ip, {
    count: current && current.reset > now ? current.count + 1 : 1,
    reset: current && current.reset > now ? current.reset : now + 15 * 60 * 1000,
  });

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (typeof body.company_website === "string" && body.company_website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const organization = String(body.organization ?? "").trim();
  const type = String(body.type ?? "general").trim();
  const message = String(body.message ?? "").trim();

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json({ ok: false, error: "Please provide your name." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: "Please provide a valid email address." }, { status: 400 });
  }
  if (organization.length < 2) {
    return NextResponse.json({ ok: false, error: "Please provide your organization." }, { status: 400 });
  }
  if (message.length < 20 || message.length > 2000) {
    return NextResponse.json({ ok: false, error: "Please include a short message (at least 20 characters)." }, { status: 400 });
  }

  const enquiry = {
    name,
    email,
    organization,
    type,
    message,
    receivedAt: new Date().toISOString(),
  };

  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    const file = path.join(dir, "inquiries.json");
    let existing: unknown[] = [];
    try {
      existing = JSON.parse(await readFile(file, "utf8")) as unknown[];
    } catch {
      existing = [];
    }
    existing.push(enquiry);
    await writeFile(file, JSON.stringify(existing, null, 2));
  } catch {
    // Storage is a fallback; email delivery can still succeed.
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const resendKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL ?? "Thirteen Month Technology <noreply@thirteenmonth.technology>";

  if (resendKey && to) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website enquiry · ${type} · ${organization}`,
        text: `Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\nType: ${type}\n\n${message}`,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, error: "Your message was received locally, but email delivery is not configured yet." },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
