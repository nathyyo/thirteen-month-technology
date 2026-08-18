import Link from "next/link";
import { Wordmark } from "@/components/brand";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--line)]">
      <div className="container-site grid grid-cols-3 gap-x-3 gap-y-5 py-5 sm:gap-6 sm:py-8 lg:grid-cols-[1.35fr_repeat(3,minmax(0,1fr))] lg:py-10">
        <div className="col-span-3 lg:col-span-1">
          <Wordmark />
          <p className="mt-2 max-w-sm text-[0.8rem] leading-5 text-[var(--muted)] sm:mt-3 sm:text-sm sm:leading-6">
            {site.tagline}
          </p>
        </div>
        {site.footerNav.map((group) => (
          <div key={group.title} className="min-w-0">
            <p className="brand-kicker">{group.title}</p>
            <ul className="mt-2 space-y-1 sm:mt-3 sm:space-y-1.5">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-[0.8rem] leading-5 text-[var(--ink-soft)] hover:text-[var(--accent)] sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--line)]">
        <div className="container-site flex flex-col gap-1.5 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] text-[0.7rem] text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:py-3.5 sm:text-xs">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>Verify. Connect. Manage. Audit.</span>
            <Link href="/privacy" className="hover:text-[var(--accent)]">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
