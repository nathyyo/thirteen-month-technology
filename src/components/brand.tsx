import Image from "next/image";
import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";
import { cn } from "@/lib/cn";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex min-w-0 items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]",
        className,
      )}
      aria-label="Thirteen Month Technology home"
    >
      <LogoMark className="h-8 w-8 shrink-0 sm:h-9 sm:w-9 dark:hidden" tone="ink" />
      <LogoMark className="hidden h-8 w-8 shrink-0 sm:h-9 sm:w-9 dark:block" tone="reversed" />
      <span className="min-w-0 leading-none">
        <span className="font-display block truncate text-[1.05rem] tracking-[-0.01em] sm:text-[1.2rem]">
          <span className="font-bold text-[color:var(--ink)]">13</span>
          <span className="font-normal text-[color:var(--ink)]"> Month</span>
        </span>
        <span className="mt-0.5 block truncate text-[0.55rem] font-medium tracking-[0.32em] text-[color:var(--clay-bright)]">
          TECHNOLOGY
        </span>
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
