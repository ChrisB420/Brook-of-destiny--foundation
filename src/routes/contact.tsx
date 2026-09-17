import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Smartphone } from "lucide-react";
import { BrookRule } from "@/components/brook-rule";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [{ title: "Contact Us — Brook of Destiny Foundation" }],
  }),
});

function Contact() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Write, visit, or walk with us"
        lede="Our office is in Lugulu, Bungoma County. We welcome conversations about partnership, volunteering, giving, and community support."
        image="/images/hero.jpg"
        imageAlt="Village paths in Bungoma County"
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold">Reach the Foundation</h2>
          <BrookRule className="mt-4" />
          <ul className="mt-8 space-y-6">
            <li className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-forest text-gold">
                <MapPin className="size-5" />
              </span>
              <div>
                <p className="font-medium text-forest">Office</p>
                <p className="text-muted">{SITE.location.line}</p>
                <p className="mt-1 text-sm text-muted">{SITE.location.note}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-forest text-gold">
                <Mail className="size-5" />
              </span>
              <div>
                <p className="font-medium text-forest">Email</p>
                <a href={`mailto:${SITE.email}`} className="text-sky hover:underline">
                  {SITE.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-forest text-gold">
                <Smartphone className="size-5" />
              </span>
              <div>
                <p className="font-medium text-forest">Phone & WhatsApp</p>
                <a href="tel:+254724916908" className="text-sky hover:underline">
                  +254 724 916 908
                </a>
                <p className="mt-1 text-sm text-muted">Call or message us on WhatsApp.</p>
              </div>
            </li>
          </ul>

          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
              Social
            </p>
            <p className="mt-2 text-sm text-muted">
              Follow our community work through the Foundation&apos;s verified social channels.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {["tiktok", "facebook", "instagram"].map((network) => (
                <a
                  key={network}
                  href={SITE.social[network as keyof typeof SITE.social]}
                  className="inline-flex min-h-11 items-center rounded-md border border-gold/40 px-4 text-sm font-medium capitalize text-forest hover:bg-gold/10"
                  rel="noreferrer"
                  target="_blank"
                >
                  {network}
                </a>
              ))}
              <a
                href="https://wa.me/254724916908"
                className="inline-flex min-h-11 items-center rounded-md border border-gold/40 px-4 text-sm font-medium text-forest hover:bg-gold/10"
                rel="noreferrer"
                target="_blank"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-card p-6 shadow-soft sm:p-8">
          <h3 className="font-display text-2xl text-forest">Send a message</h3>
          <p className="mt-2 mb-6 text-sm text-muted">
            Partnerships, volunteering, giving, or a simple greeting — start here.
          </p>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
