import { cn } from "@/lib/cn";

export function AccentDivider({
  className,
  eager = false,
}: {
  className?: string;
  eager?: boolean;
}) {
  return (
    <svg viewBox="0 0 64 22" className={cn("h-4 w-16", className)} fill="none" aria-hidden>
      <path
        className={eager ? "arc-draw" : "icon-draw"}
        d="M4 19 A 34 34 0 0 1 36 4"
        stroke="var(--accent)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="38" cy="5" r="2.6" fill="var(--accent)" />
    </svg>
  );
}
