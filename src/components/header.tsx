"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/brand";
import { Button } from "@/components/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type NavItem = (typeof site.nav)[number];
type NavGroup = Extract<NavItem, { children: readonly unknown[] }>;

const solutions =
  site.nav.find((item): item is NavGroup => "children" in item)?.children ?? [];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={cn("sticky top-0 z-50 isolate site-header", scrolled || open ? "shadow-[0_10px_40px_rgb(0_0_0/0.08)]" : "")}>
      <div className="container-site flex h-14 min-w-0 items-center justify-between gap-3">
        <Wordmark />

        <nav className="hidden min-w-0 items-center gap-6 xl:flex" aria-label="Primary">
          <Link className="text-[0.9rem] font-medium text-[var(--ink-soft)] hover:text-[var(--accent)]" href="/about">
            About
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-[0.9rem] font-medium text-[var(--ink-soft)] hover:text-[var(--accent)]"
              aria-expanded={solutionsOpen}
              onClick={() => setSolutionsOpen((v) => !v)}
            >
              Solutions
              <svg viewBox="0 0 12 8" className="h-2 w-3" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M1 1.5 6 6.5 11 1.5" />
              </svg>
            </button>
            <div
              className={cn(
                "absolute left-1/2 top-full z-50 w-[min(34rem,calc(100vw-2rem))] -translate-x-1/2 pt-3 transition",
                solutionsOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0",
              )}
            >
              <div className="menu-panel grid grid-cols-2 gap-1 rounded-2xl p-2">
                {solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl p-3 transition hover:bg-[var(--bg-muted)]"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    <span className="block text-sm font-medium">{item.label}</span>
                    <span className="mt-1 block text-xs leading-5 text-[var(--muted)]">{item.description}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link className="text-[0.9rem] font-medium text-[var(--ink-soft)] hover:text-[var(--accent)]" href="/vision-2036">
            Vision 2036
          </Link>
          <Link className="text-[0.9rem] font-medium text-[var(--ink-soft)] hover:text-[var(--accent)]" href="/partnerships">
            Partnerships
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <Button href="/contact" className="hidden sm:inline-flex !min-h-9 !px-3.5 !text-sm">
            Contact
          </Button>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--bg-elevated)] xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 6 18 18M18 6 6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 8h14M5 12h14M5 16h14" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--bg)] xl:hidden">
          <nav className="container-site flex max-h-[calc(100svh-3.5rem)] flex-col gap-0.5 overflow-y-auto py-3" aria-label="Mobile">
            {[
              { href: "/about", label: "About" },
              { href: "/solutions", label: "Solutions" },
              { href: "/financial-services", label: "Financial Services" },
              { href: "/government", label: "Government" },
              { href: "/aviation", label: "Aviation" },
              { href: "/technology", label: "Technology" },
              { href: "/vision-2036", label: "Vision 2036" },
              { href: "/partnerships", label: "Partnerships" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2.5 text-base font-medium hover:bg-[var(--bg-muted)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
