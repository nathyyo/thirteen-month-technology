import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  disabled?: boolean;
};

function Arrow() {
  return (
    <svg
      viewBox="0 0 16 10"
      className="h-2.5 w-3.5 shrink-0 transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M1 5h13M9 1l5 4-5 4" />
    </svg>
  );
}

export function Button({
  href,
  children,
  className,
  variant = "primary",
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "btn group/btn",
    variant === "primary" ? "btn-primary" : "btn-secondary",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span>{children}</span>
        {variant === "primary" ? <Arrow /> : null}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      <span>{children}</span>
      {variant === "primary" ? <Arrow /> : null}
    </button>
  );
}
