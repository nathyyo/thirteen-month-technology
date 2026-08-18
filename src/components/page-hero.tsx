import { CoverImage } from "@/components/brand";
import { Button } from "@/components/button";
import { cn } from "@/lib/cn";
import { NumeralWatermark } from "@/components/numeral-watermark";
import { Reveal } from "@/components/reveal";

export function PageHero({
  kicker,
  title,
  description,
  eyebrow,
}: {
  kicker?: string;
  title: string;
  description: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <NumeralWatermark className="-right-[4%] -top-[18%] text-[clamp(9rem,20vw,15rem)]" />
      <div className="container-site relative py-8 text-center sm:py-12 lg:py-16">
        <Reveal>
          {eyebrow ? <p className="brand-kicker">{eyebrow}</p> : null}
          {kicker ? (
            <p className={cn("mt-4 text-sm font-medium text-[var(--muted)]", !eyebrow && "brand-kicker mt-0")}>
              {kicker}
            </p>
          ) : null}
          <h1 className="font-display mx-auto mt-4 max-w-4xl text-[clamp(2.15rem,5.4vw,3.75rem)] font-semibold tracking-[-0.03em] leading-[1.08]">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] sm:mt-6 sm:text-lg sm:leading-8">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Let's Build What Comes Next.",
  text = "Whether you are a financial institution, government organization, aviation company, or technology partner, we welcome conversations about building secure digital solutions for complex challenges.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-site pt-6 pb-5 sm:pt-10 sm:pb-8 lg:pt-14 lg:pb-12">
      <Reveal className="menu-panel relative overflow-hidden rounded-[1.4rem] px-5 py-6 text-center sm:rounded-[2rem] sm:px-12 sm:py-10 lg:px-16 lg:py-12">
        <NumeralWatermark className="-right-4 -top-10 text-[10rem] sm:-top-14 sm:text-[13rem]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="brand-kicker">Next step</p>
          <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight sm:mt-4 sm:text-3xl lg:text-4xl">{title}</h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[var(--muted)] sm:mt-5 sm:text-base">{text}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8">
            <Button href="/contact">Talk to Our Team</Button>
            <Button href="/solutions" variant="secondary">
              Explore Our Solutions
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function MediaBand({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative container-site overflow-hidden rounded-[1.25rem] border border-[var(--line)] sm:rounded-[1.6rem]", className)}>
      <div className="relative h-40 sm:h-56 lg:h-72">
        <CoverImage src={src} alt={alt} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] via-[#1A1614]/50 to-[#1A1614]/10" />
        {caption ? (
          <p className="absolute bottom-4 left-1/2 w-[min(92%,40rem)] -translate-x-1/2 text-center text-[0.62rem] font-medium tracking-[0.16em] text-white uppercase sm:bottom-6 sm:text-[0.7rem] sm:tracking-[0.28em]">
            {caption}
          </p>
        ) : null}
      </div>
    </div>
  );
}
