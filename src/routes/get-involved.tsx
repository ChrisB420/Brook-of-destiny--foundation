import { createFileRoute, Link } from "@tanstack/react-router";
import { BrookRule } from "@/components/brook-rule";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { INVOLVE_PATHS } from "@/lib/site";

export const Route = createFileRoute("/get-involved")({
  component: GetInvolved,
  head: () => ({
    meta: [{ title: "Get Involved — Brook of Destiny Foundation" }],
  }),
});

const SKILLS = [
  "Teaching and tutoring",
  "Youth mentorship and discipleship",
  "Nursing, clinical, or community health",
  "Counselling and psychosocial care",
  "Agronomy and agribusiness",
  "Accounting, governance, and administration",
  "Curriculum and parenting facilitation",
];

function GetInvolved() {
  return (
    <>
      <PageHero
  kicker="Partner with us"
  title="Come and labour with us in Bungoma"
  lede="We are building capacity. Volunteers, churches, sponsors, and skilled friends are not extras — they are how this work will grow without losing its soul."
  image="/images/community-01.jpg"
  imageAlt="Volunteers in reflective jackets with community members"
  imagePosition="bottom"
/>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-semibold">Four doors in</h2>
        <BrookRule className="mt-4" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {INVOLVE_PATHS.map((path) => (
            <article
              key={path.title}
              className="flex flex-col rounded-2xl border border-line bg-card p-6 shadow-soft"
            >
              <h3 className="font-display text-2xl text-forest">{path.title}</h3>
              <p className="mt-2 flex-1 text-muted">{path.body}</p>
              <Button asChild variant="outline" className="mt-5 self-start">
                <Link to={path.to}>{path.cta}</Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              Skills we need
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Bring what you already know
            </h2>
            <p className="mt-4 text-muted">
              A week of presence is better than a year of advice. If you can
              teach, keep books, dress a wound, or sit with a grieving parent —
              there is a chair for you under the tree.
            </p>
            <ul className="mt-6 space-y-2">
              {SKILLS.map((skill) => (
                <li key={skill} className="flex gap-2 text-sm text-ink">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {skill}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Mission teams from churches are welcome when they come to serve
              local leadership, not to replace it. Write first; we will prepare
              well.
            </p>
          </div>
          <div className="rounded-2xl bg-card p-6 shadow-soft sm:p-8">
            <h3 className="font-display text-2xl text-forest">Offer yourself</h3>
            <p className="mt-2 mb-6 text-sm text-muted">
              Tell us who you are and how you hope to walk with us.
            </p>
            <InquiryForm defaultInterest="volunteer" />
          </div>
        </div>
      </section>
    </>
  );
}
