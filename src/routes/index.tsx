import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, MapPin, Sprout } from "lucide-react";
import { BrookRule } from "@/components/brook-rule";
import { ProgrammeIcon } from "@/components/programme-icon";
import { Button } from "@/components/ui/button";
import { PROGRAMMES, SITE, VALUES } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title: "Brook of Destiny Foundation — Nurturing Destinies, Transforming Communities",
      },
    ],
  }),
});

function Home() {
  return (
    <>
      <section className="relative isolate min-h-[88dvh] overflow-hidden bg-forest-deep text-cream">
        <img
          src="/images/hero.jpg"
          alt="Highland paths and maize fields in Bungoma County, western Kenya"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/62" />
        <img
          src="/images/logo.jpeg"
          alt="Brook of Destiny Foundation"
          className="absolute right-[12%] bottom-[20%] z-10 w-48 object-contain sm:w-64 md:w-80"
        />
        <div className="relative mx-auto flex min-h-[88dvh] max-w-6xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6 sm:pb-20">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.jpeg"
              alt=""
              className="size-16 rounded-full object-cover ring-2 ring-gold/70 sm:size-20"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">
              Lugulu, Bungoma County · Kenya
            </p>
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold text-cream sm:text-6xl">
            {SITE.tagline.replace(".", "")}
          </h1>
          <BrookRule className="mt-5 h-4 w-48" />
          <p className="mt-5 max-w-xl text-base text-cream/90 sm:text-lg">
            Brook of Destiny Foundation is a Christian non-profit that holds the
            Gospel and practical care together — scholarships, mentorship,
            health, livelihoods, and a family around every vulnerable child.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/donate">Donate</Link>
            </Button>
            <Button asChild size="lg" variant="cream">
              <Link to="/get-involved">Get involved</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 md:py-14">
          <div className="flex gap-3">
            <MapPin className="mt-1 size-5 shrink-0 text-gold-deep" />
            <div>
              <h2 className="font-display text-xl text-forest">Rooted in Lugulu</h2>
              <p className="mt-1 text-sm text-muted">
                Webuye West, Bungoma County — among the Bukusu highlands, along
                the Webuye–Kitale road.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <HeartHandshake className="mt-1 size-5 shrink-0 text-gold-deep" />
            <div>
              <h2 className="font-display text-xl text-forest">Faith with works</h2>
              <p className="mt-1 text-sm text-muted">
                Evangelism, discipleship, and mentorship sit beside classrooms,
                clinics, and kitchen gardens.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Sprout className="mt-1 size-5 shrink-0 text-gold-deep" />
            <div>
              <h2 className="font-display text-xl text-forest">Still growing</h2>
              <p className="mt-1 text-sm text-muted">
                We are building capacity and seeking churches, friends, and
                institutions who will walk with us for the long season.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
          Our programmes
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          Eight ways we nurture a destiny
        </h2>
        <BrookRule className="mt-4" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMMES.map((p) => (
            <Link
              key={p.slug}
              to="/programmes/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-soft transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5"
            >
              <img
                src={p.image}
                alt={p.imageAlt}
                className="aspect-photo w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <span className="inline-flex size-9 items-center justify-center rounded-md bg-forest text-gold">
                  <ProgrammeIcon icon={p.icon} />
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-forest">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted">{p.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold-deep">
                  Read more
                  <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-forest text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <img
            src="/images/team/interview-01.jpg"
            alt="Volunteers in reflective jackets speaking with residents in a village compound"
            className="aspect-photo w-full rounded-2xl object-cover"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              From the field
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-cream sm:text-4xl">
              Presence before programmes
            </h2>
            <BrookRule className="mt-4" />
            <p className="mt-5 text-cream/85">
              Our team and volunteers walk village paths in reflective jackets —
              not as visitors passing through, but as neighbours. Health
              outreach, homestead visits, and youth circles are how destinies
              are actually nurtured.
            </p>
            <p className="mt-4 text-cream/85">
              We would rather grow slowly and remain faithful than announce
              impact we cannot shepherd. If you have skills, a church, or a
              gift, there is a place for you here.
            </p>
            <Button asChild className="mt-7" variant="gold">
              <Link to="/impact">See our work</Link>
            </Button>
          </div>
        </div>
      </section>
<section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
    From our programmes
  </p>
  <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
    Watch the work in motion
  </h2>
  <BrookRule className="mt-4" />
  <div className="mt-10 grid gap-6 sm:grid-cols-2">
    <div className="overflow-hidden rounded-2xl shadow-soft">
      <video
        className="aspect-photo w-full object-cover"
        src="/videos/education/classroom-tour.mp4"
        controls
        muted
        playsInline
        poster="/images/education/classroom-02.jpg"
      />
      <div className="bg-card p-4">
        <h3 className="font-display text-lg font-semibold text-forest">
          Inside the classroom
        </h3>
        <p className="mt-1 text-sm text-muted">
          A look at our Education & Scholarships programme in Lugulu.
        </p>
      </div>
    </div>
    <div className="overflow-hidden rounded-2xl shadow-soft">
      <video
        className="aspect-photo w-full object-cover"
        src="/videos/education/classroom-tour-01.mp4"
        controls
        muted
        playsInline
        poster="/images/education/classroom-04.jpg"
      />
      <div className="bg-card p-4">
        <h3 className="font-display text-lg font-semibold text-forest">
          Teaching
        </h3>
        <p className="mt-1 text-sm text-muted">
          A look at our Education & Scholarships programme in Lugulu.
        </p>
      </div>
    </div>
    <div className="overflow-hidden rounded-2xl shadow-soft">
      <video
        className="aspect-photo w-full object-cover"
        src="/videos/team/teamwork.mp4"
        controls
        muted
        playsInline
        poster="/images/farming/tree-planting-01.jpg"
      />
      <div className="bg-card p-4">
        <h3 className="font-display text-lg font-semibold text-forest">
          Team building
        </h3>
        <p className="mt-1 text-sm text-muted">
          Community members planting trees as part of our Livelihoods work.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="bg-cream">
  <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
      Watch
    </p>
    <h2 className="mt-3 font-display text-3xl font-semibold text-forest sm:text-4xl">
      See it for yourself
    </h2>
    <BrookRule className="mx-auto mt-4" />
    <div className="mx-auto mt-8 aspect-[9/16] w-full max-w-xs overflow-hidden rounded-2xl shadow-soft">
      <iframe
        className="size-full"
        src="https://www.youtube.com/embed/AJNP--TraYM"
        title="Brook of Destiny Foundation on YouTube"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
    <a
      href="https://youtube.com/@brookofdestinyfoundation"
      target="_blank"
      rel="noreferrer"
      className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-gold-deep hover:underline"
    >
      Watch more on our YouTube channel
    </a>
  </div>
</section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              Christian identity
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Living water, not a slogan
            </h2>
            <BrookRule className="mt-4" />
            <p className="mt-5 text-muted">
              We take our name from the brook — a small stream that keeps
              giving. In Scripture, those who delight in the Lord are “like
              trees planted by streams of water.” That is the picture we hold
              for every learner, parent, and village we serve.
            </p>
            <blockquote className="mt-6 border-l-2 border-gold pl-4 font-display text-xl italic text-forest">
              “{SITE.verse.text}”
              <footer className="mt-2 font-sans text-sm not-italic text-muted">
                {SITE.verse.ref}
              </footer>
            </blockquote>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {VALUES.map((v) => (
              <article
                key={v.title}
                className="rounded-2xl border border-line bg-card p-5 shadow-soft"
              >
                <h3 className="font-display text-xl text-forest">{v.title}</h3>
                <p className="mt-2 text-sm text-muted">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-forest-deep py-16 text-cream sm:py-20">
        <img
          src="/images/events/poster-2026.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-forest-deep/75" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            Support our work
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-cream sm:text-4xl">
            Give through M-Pesa or walk with us
          </h2>
          <p className="mt-4 text-cream/85">
            Paybill {SITE.giving.paybill} · Account {SITE.giving.account} ·{" "}
            {SITE.giving.bank}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/donate">Give now</Link>
            </Button>
            <Button asChild size="lg" variant="cream">
              <Link to="/get-involved">Partner with us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
