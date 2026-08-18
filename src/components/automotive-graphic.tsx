import { cn } from "@/lib/cn";

export function AutomotiveMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={cn(className)} fill="none" aria-hidden>
      <path
        d="M22 82 L36 52 Q42 41 56 41 L118 41 Q131 41 138 52 L154 82"
        stroke="#F6F1E7"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 82 H164" stroke="#F6F1E7" strokeWidth="3.5" strokeLinecap="round" />
      <path
        d="M56 41 L61 62 H133 L138 41"
        stroke="#F6F1E7"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="52" cy="86" r="13" stroke="#F6F1E7" strokeWidth="3.5" />
      <circle cx="134" cy="86" r="13" stroke="#F6F1E7" strokeWidth="3.5" />
      <path d="M14 100 Q88 114 174 100" stroke="#C1622D" strokeWidth="2.5" strokeDasharray="1 8" strokeLinecap="round" />
    </svg>
  );
}

export function AutomotiveGraphic({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex h-full w-full items-center justify-center bg-[#1A1614]", className)}>
      <AutomotiveMark className="h-[54%] w-[54%]" />
    </div>
  );
}

export function AutomotiveBand({ caption, className }: { caption?: string; className?: string }) {
  return (
    <div
      className={cn(
        "relative container-site overflow-hidden rounded-[1.25rem] border border-[var(--line)] sm:rounded-[1.6rem]",
        className,
      )}
    >
      <div className="relative h-40 sm:h-56 lg:h-72">
        <AutomotiveGraphic />
        {caption ? (
          <p className="absolute bottom-4 left-1/2 w-[min(92%,40rem)] -translate-x-1/2 text-center text-[0.62rem] font-medium tracking-[0.16em] text-white uppercase sm:bottom-6 sm:text-[0.7rem] sm:tracking-[0.28em]">
            {caption}
          </p>
        ) : null}
      </div>
    </div>
  );
}
