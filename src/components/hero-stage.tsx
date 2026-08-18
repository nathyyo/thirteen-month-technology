import { LogoMark } from "@/components/logo-mark";
import { NumeralWatermark } from "@/components/numeral-watermark";
import { cn } from "@/lib/cn";

export function HeroStage({ className }: { className?: string }) {
  return (
    <div className={cn("hero-stage", className)}>
      <div className="float-y surface absolute inset-[8%] flex items-center justify-center overflow-hidden rounded-[1.4rem] sm:inset-[10%] sm:rounded-[1.75rem] lg:inset-[12%] lg:rounded-[1.85rem]">
        <NumeralWatermark className="-right-[6%] -bottom-[14%] text-[clamp(9rem,26vw,16rem)]" />
        <LogoMark animated flourish tone="ink" className="relative z-10 h-[42%] w-[42%] dark:hidden" />
        <LogoMark animated flourish tone="reversed" className="relative z-10 hidden h-[42%] w-[42%] dark:block" />
      </div>
    </div>
  );
}
