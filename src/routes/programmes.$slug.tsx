import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BrookRule } from "@/components/brook-rule";
import { PageHero } from "@/components/page-hero";
import { ProgrammeIcon } from "@/components/programme-icon";
import { Button } from "@/components/ui/button";
import { getProgramme, PROGRAMMES } from "@/lib/site";

export const Route = createFileRoute("/programmes/$slug")({
  component: ProgrammePage,
  loader: ({ params }) => {
    const programme = getProgramme(params.slug);
    if (!programme) throw notFound();
    return { programme };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.programme.title ?? "Programme"} — Brook of Destiny Foundation`,
      },
    ],
  }),
});

function ProgrammePage() {
  const { programme } = Route.useLoaderData();
  const others = PROGRAMMES.filter((p) => p.slug !== programme.slug).slice(0, 3);

  return (
    <>
      <PageHero
        kicker="Programme"
        title={programme.title}
        lede={programme.summary}
        image={programme.image}
        imageAlt={programme.imageAlt}
        video={programme.video}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_18rem]">
        <article>
          <span className="inline-flex size-11 items-center justify-center rounded-md bg-forest text-gold">
            <ProgrammeIcon icon={programme.icon} className="size-5" />
          </span>

          <div className="mt-6 space-y-4 text-muted">
            {programme.body.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>

          {/* Programme photo gallery */}
          {programme.images && programme.images.length > 0 && (
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                In pictures
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold text-forest sm:text-3xl">
                {programme.title} in action
              </h2>

              <BrookRule className="mt-4" />

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {programme.images.map((image) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className={`w-full rounded-2xl object-cover shadow-soft ${
                      image.featured
                        ? "aspect-[16/9] sm:col-span-2"
                        : "aspect-photo"
                    } ${image.className ?? ""}`}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/donate">Support this work</Link>
            </Button>

            <Button asChild variant="outline">
              <Link to="/get-involved">Volunteer or partner</Link>
            </Button>
          </div>
        </article>

        <aside className="h-fit rounded-2xl border border-line bg-cream p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
            Other programmes
          </p>

          <ul className="mt-4 space-y-3">
            {others.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/programmes/$slug"
                  params={{ slug: p.slug }}
                  className="flex items-start gap-2 text-sm font-medium text-forest hover:text-gold-deep"
                >
                  <ProgrammeIcon
                    icon={p.icon}
                    className="mt-0.5 size-4 shrink-0"
                  />
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>

          <BrookRule className="mt-5 w-24" />

          <Link
            to="/programmes"
            className="mt-3 inline-block text-sm text-muted hover:text-forest"
          >
            View all programmes
          </Link>
        </aside>
      </section>
    </>
  );
}