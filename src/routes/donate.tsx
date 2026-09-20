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

      {/* GIVING DETAILS */}
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
            We empower vulnerable children, youth, and families through
            practical support, education, mentorship, livelihoods, and
            community outreach.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* M-PESA */}
          <div className="rounded-2xl border border-line bg-card p-6 shadow-soft sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              Through M-PESA
            </p>

            <h3 className="mt-3 font-display text-2xl font-semibold text-forest">
              Give from Kenya
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

          {/* BANK */}
          <div className="rounded-2xl bg-forest p-6 text-cream shadow-soft sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Direct Bank Deposit
            </p>

            <h3 className="mt-3 font-display text-2xl font-semibold text-cream">
              {SITE.giving.bank}
            </h3>

            <BrookRule className="mt-4" />

            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-sm text-gold-soft">Account Name</dt>
                <dd className="mt-1 text-lg text-cream">
                  {SITE.giving.accountName}
                </dd>
              </div>

              <div>
                <dt className="text-sm text-gold-soft">
                  Bank Account Number
                </dt>
                <dd className="mt-1 break-all font-display text-3xl font-semibold tracking-wide text-cream">
                  {SITE.giving.bankAccount}
                </dd>
              </div>
            </dl>

            <div className="mt-8 rounded-xl border border-gold/30 bg-black/10 p-4">
              <p className="text-sm leading-6 text-cream/80">
                Every contribution helps us support vulnerable children,
                youth, families, and communities through practical,
                Christ-centred programmes.
              </p>
            </div>

            <Button asChild variant="gold" className="mt-6">
              <a
                href={`mailto:${SITE.email}?subject=Donation%20Confirmation`}
              >
                Contact Us About Your Gift
              </a>
            </Button>
          </div>
        </div>

        {/* INTERNATIONAL GIVING */}
        <div className="mt-8 rounded-2xl border border-line bg-card p-6 shadow-soft sm:p-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                International Giving
              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold text-forest sm:text-3xl">
                Give From Anywhere in the World
              </h3>

              <BrookRule className="mx-auto mt-4" />

              <p className="mt-5 text-muted">
                Friends, churches, organisations, and partners outside Kenya
                can support Brook of Destiny Foundation through international
                money-transfer services or an international bank transfer to
                our KCB account.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* MONEY TRANSFER */}
              <div className="rounded-xl border border-line bg-cream p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                  International Money Transfer
                </p>

                <h4 className="mt-3 font-display text-xl font-semibold text-forest">
                  Send Support Through a Money Transfer Service
                </h4>

                <p className="mt-3 text-sm leading-6 text-muted">
                  International donors may use an available money-transfer
                  service such as Western Union, MoneyGram, or Ria to send
                  funds to Kenya. KCB provides international money-transfer
                  services and allows international remittances to be
                  received through its network.
                </p>

                <div className="mt-5 rounded-lg border border-gold/30 bg-card p-4">
                  <p className="text-sm font-semibold text-forest">
                    Before sending
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    Please contact Brook of Destiny Foundation first so we can
                    provide the correct recipient information and instructions
                    for the transfer method you choose.
                  </p>
                </div>

                <Button asChild variant="gold" className="mt-5">
                  <a
                    href={`mailto:${SITE.email}?subject=International%20Money%20Transfer%20Donation`}
                  >
                    Get International Transfer Details
                  </a>
                </Button>
              </div>

              {/* SWIFT */}
              <div className="rounded-xl bg-forest p-6 text-cream">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
                  International Bank Transfer
                </p>

                <h4 className="mt-3 font-display text-xl font-semibold text-cream">
                  Transfer Directly to KCB
                </h4>

                <p className="mt-3 text-sm leading-6 text-cream/80">
                  Donors with access to international bank transfers can ask
                  their bank to send funds to the Brook of Destiny Foundation
                  KCB account using the required SWIFT transfer information.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-sm text-gold-soft">
                      Bank
                    </p>
                    <p className="mt-1 font-semibold text-cream">
                      {SITE.giving.bank}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gold-soft">
                      Account Name
                    </p>
                    <p className="mt-1 font-semibold text-cream">
                      {SITE.giving.accountName}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gold-soft">
                      Account Number
                    </p>
                    <p className="mt-1 break-all font-display text-xl font-semibold text-cream">
                      {SITE.giving.bankAccount}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gold-soft">
                      KCB SWIFT / BIC
                    </p>
                    <p className="mt-1 font-display text-xl font-semibold tracking-wide text-cream">
                      KCBLKENX
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-gold/30 bg-black/10 p-4">
                  <p className="text-xs leading-5 text-cream/70">
                    International transfers may require additional bank and
                    beneficiary information. Please contact us before sending
                    funds so we can confirm the correct transfer details.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted">
                Need the correct international transfer instructions?
              </p>

              <Button asChild className="mt-4">
                <a
                  href={`mailto:${SITE.email}?subject=International%20Donation%20Inquiry`}
                >
                  Contact Brook of Destiny Foundation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WAYS TO PARTNER */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              Many Ways to Partner
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold text-forest sm:text-4xl">
              Your support can take many forms
            </h2>

            <BrookRule className="mt-4" />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Financial Contributions",
                body: "Give through M-PESA, bank deposit, or international money transfer to strengthen our programmes and community work.",
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