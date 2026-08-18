import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function Wordmark({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex min-w-0 items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--blue)]",
        className,
      )}
      aria-label="Thirteen Month Technology home"
    >
      <span className="relative flex h-8 w-[3.35rem] shrink-0 items-center justify-center overflow-hidden rounded-md bg-[#05070c] ring-1 ring-white/10 sm:h-9 sm:w-[3.85rem]">
        <Image
          src="/brand/mark-13.png"
          alt=""
          width={634}
          height={390}
          className="h-full w-full object-contain p-[3px]"
          sizes="62px"
          priority={compact}
        />
      </span>
      <span className="min-w-0 leading-none">
        <span className="font-display block truncate text-[0.68rem] font-bold tracking-[0.14em] sm:text-[0.78rem] sm:tracking-[0.16em]">
          <span className="text-[color:var(--ink)] dark:text-[color:var(--silver-bright)]">THIRTEEN </span>
          <span className="text-[color:var(--blue)]">MONTH</span>
        </span>
        {!compact && (
          <span className="mt-1 hidden text-[0.55rem] font-semibold tracking-[0.38em] text-[color:var(--blue)] sm:block">
            TECHNOLOGY
          </span>
        )}
      </span>
    </Link>
  );
}

export function CoverImage({
  src,
  alt,
  sizes,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", className)}
    />
  );
}
