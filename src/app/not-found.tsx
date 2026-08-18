import Link from "next/link";
import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[min(28rem,70svh)] flex-col items-center justify-center py-16 text-center">
      <p className="brand-kicker">404</p>
      <h1 className="font-display mt-4 text-3xl font-semibold sm:text-4xl">This page is not available.</h1>
      <p className="mx-auto mt-4 max-w-md text-[var(--muted)]">
        The address may have changed. Return to the public corporate site to continue.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Button href="/">Home</Button>
        <Button href="/contact" variant="secondary">
          Contact
        </Button>
      </div>
      <p className="mt-8 text-sm">
        <Link href="/solutions" className="text-[var(--blue)]">
          Explore solutions
        </Link>
      </p>
    </section>
  );
}
