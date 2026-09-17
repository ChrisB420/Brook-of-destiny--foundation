import { createFileRoute, Link } from "@tanstack/react-router";
import { BrookRule } from "@/components/brook-rule";
import { CopyField } from "@/components/copy-field";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/donate")({
  component: Donate,
  head: () => ({
    meta: [{ title: "Support Our Work — Brook of Destiny Foundation" }],
  }),
});

const STEPS = [
  "Open M-PESA on your phone",
  "Choose Lipa na M-PESA, then Pay Bill",
  `Enter business number ${SITE.giving.paybill}`,
  `Enter account number ${SITE.giving.mpesaAccount}`,
  "Enter the amount you would like to give",
  "Enter your M-PESA PIN and confirm",
];

function Donate() {
  return (
    <>
      <PageHero
        kicker="Support Our Work"
        title="Give hope, opportunity, and practical support"
        lede="Support education, health, parenting, psychosocial care, youth empowerment, livelihoods, evangelism, and discipleship across the communities we serve."
        image="/images/farming.jpg"
        imageAlt="Community members working together in Bungoma County"
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            M-PESA Paybill
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold">
            Give from Kenya
          </h2>
          <BrookRule className="mt-4" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <CopyField label="Paybill (business number)" value={SITE.giving.paybill} large />
            <CopyField label="M-PESA account number" value={SITE.giving.mpesaAccount} large />
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
            Direct bank deposit
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
              <dt className="text-gold-soft">Direct bank account number</dt>
              <dd className="mt-1 font-display text-2xl text-cream">
                {SITE.giving.bankAccount}
              </dd>
            </div>
          </dl>
          <p className="mt-6 text-sm text-cream/75">
            Please contact us after depositing so we can acknowledge your support and provide any receipt or programme information required.
          </p>
          <Button asChild variant="gold" className="mt-6">
            <a href={`mailto:${SITE.email}?subject=Donation%20confirmation`}>Contact us about your gift</a>
          </Button>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-semibold">Many ways to partner</h2>
          <BrookRule className="mt-4" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Financial contributions", "Give through M-PESA or direct bank deposit to strengthen our programmes."],
              ["Scholarships and materials", "Support vulnerable learners with fees, books, uniforms, learning materials, food, or clothing."],
              ["Skills and partnership", "Offer professional expertise, volunteer service, agribusiness training, project funding, or a joint community project."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-line bg-card p-6 shadow-soft">
                <h3 className="font-display text-xl text-forest">{title}</h3>
                <p className="mt-2 text-sm text-muted">{body}</p>
              </article>
            ))}
          </div>
          <Button asChild className="mt-8">
            <Link to="/contact">Tell us how you would like to partner</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
