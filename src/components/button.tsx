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

export function Button({
  href,
  children,
  className,
  variant = "primary",
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "btn",
    variant === "primary" ? "btn-primary" : "btn-secondary",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
