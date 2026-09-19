import { createFileRoute, Link } from "@tanstack/react-router";
import { BrookRule } from "@/components/brook-rule";
import { CopyField } from "@/components/copy-field";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/donate")({
  component: Donate,
  head: () => ({
    meta: [{ title: "Partner With Us — Brook of Destiny Foundation" }],
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
        kicker="Partner With Us"
        title="Make a Difference"
        lede="Your support helps us nurture destinies and transform communities through faith, education, empowerment, psychosocial support, and community outreach."
        image="/images/farming.jpg"
        imageAlt="Community members working together in Bungoma County"
      />

      {/* SUPPORT INTRO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Support Brook of Destiny Foundation
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold text-forest sm:text-4xl">
            Together, We Can Change Lives
          </h2>

          <BrookRule className="mx-auto mt-5" />

          <p className="mt-5 text-muted">
            We empower vulnerable children, youth, and families through faith
            and mentorship, education, livelihood empowerment, psychosocial
            support, and charity and community outreach.
          </p>
        </div>

        {/* LOCAL + INTERNATIONAL */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* M-PESA */}
          <div className="rounded-2xl border border-line bg-card p-6 shadow-soft sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              For Donors in Kenya
            </p>

            <h3 className="mt-3 font-display text-2xl font-semibold text-forest">
              Give Through M-PESA
            </h3>

            <BrookRule className="mt-4" />

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <CopyField
                label="Paybill Business Number"
                value={SITE.giving.paybill}
                large
              />

              <CopyField
                label="Account Number"
                value={SITE.giving.mpesaAccount}
                large
              />
            </div>

            <p className="mt-4 text-sm text-muted">
              Account name:{" "}
              <span className="font-semibold text-ink">
                {SITE.giving.accountName}
              </span>
            </p>

            <div className="mt-8">
              <h4 className="font-display text-xl font-semibold text-forest">
                How to Give
              </h4>

              <ol className="mt-5 space-y-3">
                {STEPS.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-forest font-display text-sm font-semibold text-gold">
                      {index + 1}
                    </span>

                    <span className="pt-1 text-sm text-ink">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* INTERNATIONAL / BANK */}
          <div className="rounded-2xl bg-forest p-6 text-cream shadow-soft sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              For Donors Worldwide
            </p>

            <h3 className="mt-3 font-display text-2xl font-semibold text-cream">
              International Giving
            </h3>

            <BrookRule className="mt-4" />

            <p className="mt-5 text-sm leading-6 text-cream/80">
              Donors outside Kenya can support Brook of Destiny Foundation
              through an international bank transfer to our KCB Bank account.
              KCB supports international transfers through SWIFT.{" "}
            </p>

            <dl className="mt-8 space-y-5">
              <div>
                <dt className="text-sm text-gold-soft">Bank</dt>
                <dd className="mt-1 text-lg text-cream">
                  {SITE.giving.bank}
                </dd>
              </div>

              <div>
                <dt className="text-sm text-gold-soft">Account Name</dt>
                <dd className="mt-1 text-lg text-cream">
                  {SITE.giving.accountName}
                </dd>
              </div>

              <div>
                <dt className="text-sm text-gold-soft">Account Number</dt>
                <dd className="mt-1 break-all font-display text-3xl font-semibold tracking-wide text-cream">
                  {SITE.giving.bankAccount}
                </dd>
              </div>

              <div>
                <dt className="text-sm text-gold-soft">SWIFT / BIC</dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-cream">
                  KCBLKENX
                </dd>
              </div>

              <div>
                <dt className="text-sm text-gold-soft">Country</dt>
                <dd className="mt-1 text-lg text-cream">
                  Kenya
                </dd>
              </div>
            </dl>

            <div className="mt-8 rounded-xl border border-gold/30 bg-black/10 p-4">
              <p className="text-sm leading-6 text-cream/80">
                International donors should confirm the receiving bank
                details and any applicable transfer requirements with their
                bank before sending funds.
              </p>
            </div>

            <Button asChild variant="gold" className="mt-6">
              <a
                href={`mailto:${SITE.email}?subject=International%20Donation%20Enquiry`}
              >
                Contact Us About International Giving
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* WAYS TO PARTNER */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              Everyone Can Partner
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold text-forest sm:text-4xl">
              Many Ways to Make a Difference
            </h2>

            <BrookRule className="mt-4" />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Financial Contributions",
                body: "Give through M-PESA, local bank deposit, or international bank transfer to strengthen our programmes.",
              },
              {
                title: "Education & Materials",
                body: "Support vulnerable learners with school fees, books, uniforms, learning materials, food, or clothing.",
              },
              {
                title: "Skills & Partnership",
                body: "Offer professional expertise, volunteer service, agribusiness training, project funding, or a joint community project.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-line bg-card p-6 shadow-soft"
              >
                <h3 className="font-display text-xl font-semibold text-forest">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <Button asChild className="mt-8">
            <Link to="/contact">
              Tell Us How You Would Like to Partner
            </Link>
          </Button>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-forest-deep px-4 py-16 text-center text-cream sm:px-6">
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-3xl font-semibold sm:text-4xl">
            Thank you for partnering with us.
          </p>

          <BrookRule className="mx-auto mt-5" />

          <p className="mt-6 text-cream/80">
            Together, we can nurture destinies and transform communities.
          </p>

          <p className="mt-6 font-display text-lg text-gold-soft">
            “Whoever is generous to the poor lends to the LORD, and He will
            repay him for his deed.”
          </p>

          <p className="mt-2 text-sm text-cream/60">
            — Proverbs 19:17
          </p>
        </div>
      </section>
    </>
  );
}