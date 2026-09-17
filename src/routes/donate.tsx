import { createFileRoute, Link } from "@tanstack/react-router";
import { BrookRule } from "@/components/brook-rule";
import { CopyField } from "@/components/copy-field";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/donate")({
  component: Donate,
  head: () => ({
    meta: [{ title: "Donate — Brook of Destiny Foundation" }],
  }),
});

const STEPS = [
  "Open M-PESA on your phone",
  "Choose Lipa na M-PESA, then Pay Bill",
  `Enter business number ${SITE.giving.paybill}`,
  `Enter account number ${SITE.giving.account}`,
  "Enter the amount the Lord has placed on your heart",
  "Enter your M-PESA PIN and confirm",
];

function Donate() {
  return (
    <>
      <PageHero
        kicker="Give"
        title="Support our work"
        lede="Every shilling is a seed. Give through M-Pesa or KCB, sponsor a learner, or send a gift in kind — we will steward it in Lugulu."
        image="/images/farming.jpg"
        imageAlt="Farmers working the land in Bungoma County"
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            M-Pesa Paybill
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold">
            The fastest way to give from Kenya
          </h2>
          <BrookRule className="mt-4" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <CopyField label="Paybill (business number)" value={SITE.giving.paybill} large />
            <CopyField label="Account number" value={SITE.giving.account} large />
          </div>
          <p className="mt-4 text-sm text-muted">
            Account name: {SITE.giving.accountName}. Tap a number to copy it.
          </p>
          <ol className="mt-8 space-y-3">
            {STEPS.map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-forest font-display text-sm text-gold">
                  {i + 1}
                </span>
                <span className="pt-1 text-sm text-ink">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-2xl bg-forest p-6 text-cream sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            Bank transfer
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-cream">
            {SITE.giving.bank}
          </h2>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-gold-soft">Account name</dt>
              <dd className="mt-1 text-lg text-cream">{SITE.giving.accountName}</dd>
            </div>
            <div>
              <dt className="text-gold-soft">Account number</dt>
              <dd className="mt-1 font-display text-2xl text-cream">
                {SITE.giving.account}
              </dd>
            </div>
            <div>
              <dt className="text-gold-soft">Paybill for this account</dt>
              <dd className="mt-1 text-lg text-cream">{SITE.giving.paybill}</dd>
            </div>
          </dl>
          <p className="mt-6 text-sm text-cream/75">
            For SWIFT or international wire details, write to us and we will
            send them privately. Please include your name and the programme you
            wish to bless.
          </p>
          <Button asChild variant="gold" className="mt-6">
            <a href={`mailto:${SITE.email}?subject=International%20giving`}>
              Request international details
            </a>
          </Button>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-semibold">Other ways to give</h2>
          <BrookRule className="mt-4" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-line bg-card p-6 shadow-soft">
              <h3 className="font-display text-xl text-forest">Sponsor a learner</h3>
              <p className="mt-2 text-sm text-muted">
                Cover a term or a year of fees, books, and a mentor. You will
                know the name you are holding.
              </p>
            </article>
            <article className="rounded-2xl border border-line bg-card p-6 shadow-soft">
              <h3 className="font-display text-xl text-forest">Gifts in kind</h3>
              <p className="mt-2 text-sm text-muted">
                Uniforms, sanitary pads, farm inputs, medical kits, and food
                parcels — tell us before you send so we can receive well.
              </p>
            </article>
            <article className="rounded-2xl border border-line bg-card p-6 shadow-soft">
              <h3 className="font-display text-xl text-forest">Church collections</h3>
              <p className="mt-2 text-sm text-muted">
                Congregations may designate an offering for Brook of Destiny.
                We are glad to send a short briefing for your missions Sunday.
              </p>
            </article>
          </div>
          <Button asChild className="mt-8">
            <Link to="/contact">Tell us how you would like to give</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
