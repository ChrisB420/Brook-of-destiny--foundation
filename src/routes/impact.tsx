import { createFileRoute, Link } from "@tanstack/react-router";
import { BrookRule } from "@/components/brook-rule";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { STORIES } from "@/lib/site";

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
        kicker="Impact"
        title="Faithful presence, not inflated numbers"
        lede="We are gathering stories from the field as we grow. What we can already show you is the shape of the work: classrooms, circles, jackets on the path, and plots that feed a family."
        image="/images/farming/tree-planting-01.jpg"
        imageAlt="A mentorship circle under a tree in western Kenya"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold">From Lugulu</h2>
          <BrookRule className="mt-4" />
          <p className="mt-5 text-muted">
            Brook of Destiny Foundation is still building capacity. We will not
            publish beneficiary counts we cannot stand behind. Instead we share
            the work as it actually looks — and we invite those who have walked
            with us to offer a testimony, with permission, so this page can grow
            in truth.
          </p>
        </div>

        <div className="mt-12 grid gap-10">
          {STORIES.map((story, i) => (
            <article
              key={story.title}
              className="grid items-center gap-8 md:grid-cols-2"
            >
              <img
                src={story.image}
                alt={story.imageAlt}
                className={`aspect-photo w-full rounded-2xl object-cover ${i % 2 === 1 ? "md:order-2" : ""}`}
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  Field note
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                  {story.title}
                </h3>
                <p className="mt-3 text-muted">{story.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3">
          {[
            {
              title: "Where we serve",
              body: "Lugulu and neighbouring villages in Webuye West, Bungoma County — with room to walk further as partners arrive.",
            },
            {
              title: "How we measure",
              body: "A learner who stays in school. A youth who has a mentor. A household that plants. A church that disciples. Presence you can visit.",
            },
            {
              title: "What we need next",
              body: "Governance strength, programme funding, volunteer mentors, and churches who will adopt a circle or a learner for more than a weekend.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-line bg-card p-6 shadow-soft"
            >
              <h3 className="font-display text-xl text-forest">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold">Share a story</h2>
        <p className="mt-3 text-muted">
          If Brook of Destiny has walked with your family, we would be honoured
          to tell it — in your words, with your consent, never as pity.
        </p>
        <Button asChild className="mt-6">
          <Link to="/contact">Send a testimony</Link>
        </Button>
      </section>
    </>
  );
}
