import type { ComponentType } from "react";
import { cn } from "@/lib/cn";

type IconProps = { className?: string };

const base = "h-9 w-9";

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cn(base, className)} fill="none">
      <path
        className="icon-draw"
        d="M24 8 L38 13 V23 C38 32 32 39 24 42 C16 39 10 32 10 23 V13 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        className="icon-draw"
        d="M17 23.5 22 28.5 31 18.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cn(base, className)} fill="none">
      <circle className="icon-draw" cx="19" cy="24" r="10" stroke="currentColor" strokeWidth="1.6" />
      <circle
        className="icon-draw text-[var(--clay)]"
        cx="29"
        cy="24"
        r="10"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function LayersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cn(base, className)} fill="none">
      <path
        className="icon-draw"
        d="M24 8 L40 17 L24 26 L8 17 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        className="icon-draw text-[var(--clay)]"
        d="M8 27 24 36 40 27"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExpandIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cn(base, className)} fill="none">
      <path
        className="icon-draw"
        d="M18 8 H8 V18 M30 8 H40 V18 M18 40 H8 V30 M30 40 H40 V30"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EyeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cn(base, className)} fill="none">
      <path
        className="icon-draw"
        d="M6 24 C12 14 36 14 42 24 C36 34 12 34 6 24 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle className="icon-draw text-[var(--clay)]" cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function PencilIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cn(base, className)} fill="none">
      <path
        className="icon-draw"
        d="M30 10 L38 18 L18 38 L9 39 L10 30 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="icon-draw text-[var(--clay)]"
        d="M26 14 L34 22"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FingerprintIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cn(base, className)} fill="none">
      <path
        className="icon-draw"
        d="M24 8 A16 16 0 1 1 10.7 32.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        className="icon-draw text-[var(--clay)]"
        d="M24 16 A8 8 0 1 1 16.9 28"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
    </svg>
  );
}

export function DocumentIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cn(base, className)} fill="none">
      <path
        className="icon-draw"
        d="M14 8 H28 L36 16 V38 C36 39.1 35.1 40 34 40 H14 C12.9 40 12 39.1 12 38 V10 C12 8.9 12.9 8 14 8 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        className="icon-draw text-[var(--clay)]"
        d="M28 8 V16 H36 M18 24 H30 M18 30 H26"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FlowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cn(base, className)} fill="none">
      <circle className="icon-draw" cx="9" cy="24" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle className="icon-draw" cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle className="icon-draw" cx="39" cy="24" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        className="icon-draw text-[var(--clay)]"
        d="M14 24 H19 M29 24 H34"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DatabaseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cn(base, className)} fill="none">
      <ellipse className="icon-draw" cx="24" cy="12" rx="14" ry="5" stroke="currentColor" strokeWidth="1.6" />
      <path
        className="icon-draw"
        d="M10 12 V36 C10 38.8 16.3 41 24 41 C31.7 41 38 38.8 38 36 V12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        className="icon-draw text-[var(--clay)]"
        d="M10 24 C10 26.8 16.3 29 24 29 C31.7 29 38 26.8 38 24"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BuildingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cn(base, className)} fill="none">
      <path
        className="icon-draw"
        d="M8 40 H40 M11 40 V18 L24 8 L37 18 V40"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="icon-draw text-[var(--clay)]"
        d="M18 40 V24 M24 40 V24 M30 40 V24"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CheckCircleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={cn(base, className)} fill="none">
      <circle className="icon-draw" cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.6" />
      <path
        className="icon-draw text-[var(--clay)]"
        d="M16 24.5 21.2 30 32 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const reasonIcons: Record<string, ComponentType<IconProps>> = {
  Security: ShieldIcon,
  Trust: LinkIcon,
  Integration: LayersIcon,
  Scale: ExpandIcon,
};

export const approachIcons: Record<string, ComponentType<IconProps>> = {
  Understand: EyeIcon,
  Design: PencilIcon,
  Verify: CheckCircleIcon,
  Integrate: LinkIcon,
  Scale: ExpandIcon,
};

export const technologyIcons: Record<string, ComponentType<IconProps>> = {
  Identity: FingerprintIcon,
  Documents: DocumentIcon,
  Workflows: FlowIcon,
  Data: DatabaseIcon,
  Audit: CheckCircleIcon,
};

export const crossBorderIcons: Record<string, ComponentType<IconProps>> = {
  Identity: FingerprintIcon,
  Documents: DocumentIcon,
  Institutions: BuildingIcon,
};
