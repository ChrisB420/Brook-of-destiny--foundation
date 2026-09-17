import { createFileRoute, Link } from "@tanstack/react-router";
import { BrookRule } from "@/components/brook-rule";
import { PageHero } from "@/components/page-hero";
import { ProgrammeIcon } from "@/components/programme-icon";
import { PROGRAMMES } from "@/lib/site";

export const Route = createFileRoute("/programmes/")({
  component: Programmes,
  head: () => ({
    meta: [{ title: "Our Programmes — Brook of Destiny Foundation" }],
  }),
});

function Programmes() {
  return (
    <>
      <PageHero
        kicker="Our programmes"
        title="Holistic work, one calling"
        lede="Education, faith, health, livelihoods, and the family — held together so that a destiny is not rescued in one place and lost in another."
        image="/images/education.jpg"
        imageAlt="Young people learning in a sunlit classroom"
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <BrookRule />
        <div className="mt-10 grid gap-8">
          {PROGRAMMES.map((p, i) => (
            <article
              key={p.slug}
              className="grid overflow-hidden rounded-2xl bg-card shadow-soft md:grid-cols-2"
            >
              <img
                src={p.image}
                alt={p.imageAlt}
                className={`aspect-photo h-full w-full object-cover ${i % 2 === 1 ? "md:order-2" : ""}`}
              />
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <span className="inline-flex size-10 items-center justify-center rounded-md bg-forest text-gold">
                  <ProgrammeIcon icon={p.icon} />
                </span>
                <h2 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
                  {p.title}
                </h2>
                <p className="mt-3 text-muted">{p.summary}</p>
                <Link
                  to="/programmes/$slug"
                  params={{ slug: p.slug }}
                  className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-gold-deep hover:underline"
                >
                  Explore this programme
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
