import { createFileRoute, Link } from "@tanstack/react-router";
import { BrookRule } from "@/components/brook-rule";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { SITE, VALUES } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [{ title: "About Us — Brook of Destiny Foundation" }],
  }),
});

function About() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="A brook in Lugulu, a calling for Bungoma"
        lede="We are a Christian-based non-profit that nurtures destinies and transforms communities — still young in capacity, already clear in conviction."
        image="/images/team/colleagues-01.jpg"
        imageAlt="Foundation volunteers speaking with community members"
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Who we are
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            History held in a name
          </h2>
          <BrookRule className="mt-4" />
          <div className="mt-6 space-y-4 text-muted">
            <p>
              Brook of Destiny Foundation grew from a simple observation in
              Lugulu: destinies stall for ordinary reasons — a missed school
              term, a parent without tools, a young person without a mentor, a
              household without seed. We exist to meet those reasons with the
              Gospel and with work.
            </p>
            <p>
              We are based in Lugulu, a market centre in Webuye West
              Sub-County, Bungoma County, on the highland road between Webuye
              and Kitale. The land here is green. The need is specific. The
              people are predominantly Luhya, many of them Bukusu — farmers,
              traders, churchgoers, and families who already know how to hope.
            </p>
            <p>
              We are still building systems, staff, and partnerships. That
              honesty is part of our stewardship. We invite churches, friends in
              the diaspora, and institutions who prefer a long obedience to a
              loud launch.
            </p>
          </div>
        </div>
        <img
          src="/images/hero.jpg"
          alt="Green highland countryside around Lugulu in Bungoma County"
          className="aspect-photo w-full self-center rounded-2xl object-cover"
        />
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2">
          <article className="rounded-2xl bg-card p-8 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              Vision
            </p>
            <h2 className="mt-3 font-display text-2xl text-forest">
              A generation walking in God-given purpose
            </h2>
            <p className="mt-3 text-muted">
              We long to see families in western Kenya educated, healthy,
              discipled, and able to transform their own communities — trees
              planted by living water, bearing fruit in season.
            </p>
          </article>
          <article className="rounded-2xl bg-forest p-8 text-cream shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Mission
            </p>
            <h2 className="mt-3 font-display text-2xl text-cream">
              Nurture destinies. Transform communities.
            </h2>
            <p className="mt-3 text-cream/80">
              Through education and scholarships, youth mentorship, evangelism
              and discipleship, health and psychosocial care, livelihoods,
              parenting support, care for orphans and vulnerable children, and
              community development — always with Christ at the centre.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-semibold">What we hold</h2>
        <BrookRule className="mt-4" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {VALUES.map((v) => (
            <article
              key={v.title}
              className="rounded-2xl border border-line bg-card p-6 shadow-soft"
            >
              <h3 className="font-display text-2xl text-forest">{v.title}</h3>
              <p className="mt-2 text-muted">{v.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-forest-deep text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <img
            src="/images/faith.jpg"
            alt="Congregation gathered for worship in rural western Kenya"
            className="aspect-photo w-full rounded-2xl object-cover"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Christian identity
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-cream">
              We preach Christ, and we wash feet
            </h2>
            <p className="mt-4 text-cream/85">
              Brook of Destiny Foundation is not a secular NGO with a verse on
              the letterhead. Prayer, Scripture, evangelism, and discipleship
              shape how we select learners, train mentors, and measure success.
              We work with local churches because the church is already God’s
              plan for the village.
            </p>
            <p className="mt-4 font-display text-xl italic text-gold-soft">
              “{SITE.verse.text}” — {SITE.verse.ref}
            </p>
            <Button asChild className="mt-8">
              <Link to="/programmes">Our programmes</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
