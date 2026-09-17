import { BrookRule } from "@/components/brook-rule";

export function PageHero({
  kicker,
  title,
  lede,
  image,
  imageAlt,
}: {
  kicker?: string;
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate min-h-[22rem] overflow-hidden bg-forest-deep text-cream">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-forest-deep/70" />
      <div className="relative mx-auto flex min-h-[22rem] max-w-6xl flex-col justify-end px-4 py-12 sm:px-6 sm:py-16">
        {kicker ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            {kicker}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold text-cream sm:text-5xl">
          {title}
        </h1>
        <BrookRule className="mt-4" />
        <p className="mt-4 max-w-2xl text-base text-cream/85 sm:text-lg">{lede}</p>
      </div>
    </section>
  );
}
