import { createFileRoute, Link } from "@tanstack/react-router";
import { BrookRule } from "@/components/brook-rule";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/impact")({
  component: Impact,
  head: () => ({
    meta: [{ title: "Impact & Stories — Brook of Destiny Foundation" }],
  }),
});

function Impact() {
  return (
    <>
      <PageHero
        kicker="Our Impact"
        title="Rooted in Bungoma. Serving with purpose."
        lede="Brook of Destiny Foundation is rooted in Bungoma, Kenya, with a vision that reaches beyond borders. From our local foundation, we respond to human needs, nurture potential, restore hope, and create opportunities for children, young people, families, and communities."
        image="/images/farming/tree-planting-01.jpg"
        imageAlt="Community life and landscape in Bungoma County, Kenya"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
            Rooted in Bungoma
          </p>

          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            Local roots, a wider vision
          </h2>

          <BrookRule className="mt-4" />

          <p className="mt-5 text-muted">
            Brook of Destiny Foundation is rooted in Bungoma, Kenya, with a
            vision that reaches beyond borders. From our local foundation, we
            work to respond to human needs, nurture potential, restore hope,
            and create opportunities for children, young people, families, and
            communities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-line bg-card p-7 shadow-soft">
            <h3 className="font-display text-2xl font-semibold text-forest">
              Faith That Serves
            </h3>
            <p className="mt-4 text-muted">
              Our Christian foundation shapes the way we serve. Through
              education, mentorship, evangelism, discipleship, health and
              psychosocial support, livelihoods, and community development, we
              seek to turn compassion into practical action and faith into
              meaningful impact.
            </p>
          </article>

          <article className="rounded-2xl border border-line bg-card p-7 shadow-soft">
            <h3 className="font-display text-2xl font-semibold text-forest">
              Growing Through Partnership
            </h3>
            <p className="mt-4 text-muted">
              We are building a sustainable organization with a wider vision
              for impact. We welcome churches, individuals, institutions,
              development organizations, foundations, businesses, and partners
              who share our commitment to transforming lives and building
              stronger, resilient communities.
            </p>
          </article>

          <article className="rounded-2xl border border-line bg-card p-7 shadow-soft">
            <h3 className="font-display text-2xl font-semibold text-forest">
              A Global Vision, Local Roots
            </h3>
            <p className="mt-4 text-muted">
              Rooted in Bungoma. Serving with purpose. Partnering beyond
              borders. Transforming lives.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Our approach
              </p>

              <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
                Turning compassion into practical action
              </h2>

              <BrookRule className="mt-4" />

              <p className="mt-5 text-muted">
                Our work brings together spiritual care and practical
                community development. We seek to walk alongside people,
                strengthen families, nurture young people, and support
                communities as they build sustainable futures.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-card p-7 shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-forest">
                From Bungoma to beyond
              </h3>

              <p className="mt-4 text-muted">
                Our local presence gives us a place to begin, while
                partnerships give the work room to grow. We believe meaningful
                transformation is strengthened when communities, churches,
                institutions, businesses, and individuals work together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold">
          Partner with Brook of Destiny
        </h2>

        <p className="mt-3 text-muted">
          Join us in nurturing destinies, transforming communities, and
          building partnerships that extend from Bungoma to communities
          beyond.
        </p>

        <Button asChild className="mt-6">
          <Link to="/contact">Connect With Us</Link>
        </Button>
      </section>
    </>
  );
}