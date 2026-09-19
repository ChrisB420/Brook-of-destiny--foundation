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
        title="Rooted in Bungoma"
        lede="Brook of Destiny Foundation is rooted in Bungoma, Kenya, with a vision that reaches beyond borders — responding to human needs, nurturing potential, restoring hope, and creating opportunities for children, young people, families, and communities."
        image="/images/team/colleagues-02.jpeg"
        imageAlt="Foundation volunteers speaking with community members"
        imagePosition="top"
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
      Who we are
    </p>

    <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
      Nurturing destinies, transforming communities
    </h2>

    <BrookRule className="mt-4" />

    <div className="mt-6 space-y-4 text-muted">
      <p>
        Brook of Destiny Foundation was established with a desire to nurture
        God-given destinies, restore hope, and contribute to the transformation
        of vulnerable communities. We are a Christian-based non-profit
        organization committed to promoting holistic community well-being
        through practical, compassionate, and sustainable initiatives.
      </p>

      <p>
        Our work brings together education, youth empowerment, health and
        psychosocial support, parenting and family strengthening, sustainable
        livelihoods, humanitarian support, evangelism, and discipleship. We
        work with children, young people, families, and communities, seeking to
        respond to human needs while creating opportunities for growth,
        dignity, and resilience.
      </p>

      <p>
        Our office base is in Bungoma County, Kenya, with programme reach
        extending to Bungoma, Busia, Trans Nzoia, Kakamega, Nairobi, and
        Kajiado. We are strengthening our institutional capacity and building
        strategic partnerships with churches, organizations, foundations,
        businesses, professionals, and individuals who share our commitment to
        transforming lives and building stronger, resilient communities.
      </p>
    </div>
  </div>
</section>

        <img
          src="/images/logo.jpeg"
          alt="Green highland countryside around Lugulu in Bungoma County"
          className="aspect-square w-full max-w-sm self-center rounded-2xl bg-forest object-contain p-6"
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
              Faith That Serves
            </p>
            <h2 className="mt-3 font-display text-2xl text-cream">
              Nurture destinies. Transform communities.
            </h2>
            <p className="mt-3 text-cream/80">
              Our Christian foundation shapes the way we serve. Through
              education, mentorship, evangelism, discipleship, health and
              psychosocial support, livelihoods, and community development, we
              seek to turn compassion into practical action and faith into
              meaningful impact.
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
            src="/images/events/poster-2026.jpg"
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

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Growing through partnership
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-forest sm:text-3xl">
            A Global Vision, Local Roots
          </h2>
          <BrookRule className="mx-auto mt-4" />
          <p className="mt-5 text-lg text-muted">
            Rooted in Bungoma. Serving with purpose. Partnering beyond
            borders. Transforming lives.
          </p>
        </div>
      </section>
    </>
  );
}
