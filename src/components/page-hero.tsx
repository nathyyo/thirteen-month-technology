import { CoverImage } from "@/components/brand";
import { cn } from "@/lib/cn";
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--glow),transparent_46%)]" />
      <div className="container-site relative py-8 text-center sm:py-12 lg:py-16">
        <Reveal>
          {eyebrow ? <p className="brand-kicker">{eyebrow}</p> : null}
          {kicker ? (
            <p className={cn("mt-4 text-sm font-medium text-[var(--muted)]", !eyebrow && "brand-kicker mt-0")}>
              {kicker}
            </p>
          ) : null}
          <h1 className="font-display mx-auto mt-4 max-w-4xl text-[clamp(2rem,5vw,3.4rem)] font-semibold tracking-[-0.03em] leading-[1.12]">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--glow),transparent_46%)]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="brand-kicker">Next step</p>
          <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight sm:mt-4 sm:text-3xl lg:text-4xl">{title}</h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[var(--muted)] sm:mt-5 sm:text-base">{text}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8">
            <a href="/contact" className="btn btn-primary">
              Talk to Our Team
            </a>
            <a href="/solutions" className="btn btn-secondary">
              Explore Our Solutions
            </a>
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
    <div className={cn("relative container-site overflow-hidden rounded-[1.25rem] sm:rounded-[1.6rem]", className)}>
      <div className="relative h-40 sm:h-56 lg:h-72">
        <CoverImage src={src} alt={alt} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070c] via-[#05070c]/55 to-[#05070c]/20" />
        {caption ? (
          <p className="absolute bottom-4 left-1/2 w-[min(92%,40rem)] -translate-x-1/2 text-center text-[0.62rem] font-semibold tracking-[0.16em] text-white uppercase sm:bottom-6 sm:text-[0.7rem] sm:tracking-[0.28em]">
            {caption}
          </p>
        ) : null}
      </div>
    </div>
  );
}
