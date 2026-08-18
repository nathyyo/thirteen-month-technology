import { cn } from "@/lib/cn";

export function NumeralWatermark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "font-display pointer-events-none absolute font-bold leading-[0.8] text-[color:var(--ink)] opacity-[0.055] select-none",
        className,
      )}
    >
      13
    </span>
  );
}
