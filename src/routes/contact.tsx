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
        lede="The office is in Lugulu. The work is in the homesteads around it. We read every message."
        image="/images/hero.jpg"
        imageAlt="Village paths in the Bungoma highlands"
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
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sky hover:underline"
                >
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
                <p className="text-muted">
                  Leave a number on the form and we will return the call. Direct
                  lines will be published here as the office grows.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
              Social
            </p>
            <p className="mt-2 text-sm text-muted">
              TikTok is already live. Facebook and Instagram are being brought
              to the same standard as this site.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={SITE.social.tiktok}
                className="inline-flex min-h-11 items-center rounded-md border border-gold/40 px-4 text-sm font-medium text-forest hover:bg-gold/10"
                rel="noreferrer"
                target="_blank"
              >
                TikTok
              </a>
              <a
                href={SITE.social.facebook}
                className="inline-flex min-h-11 items-center rounded-md border border-gold/40 px-4 text-sm font-medium text-forest hover:bg-gold/10"
                rel="noreferrer"
                target="_blank"
              >
                Facebook
              </a>
              <a
                href={SITE.social.instagram}
                className="inline-flex min-h-11 items-center rounded-md border border-gold/40 px-4 text-sm font-medium text-forest hover:bg-gold/10"
                rel="noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-card p-6 shadow-soft sm:p-8">
          <h3 className="font-display text-2xl text-forest">Send a message</h3>
          <p className="mt-2 mb-6 text-sm text-muted">
            Partnerships, volunteering, giving, or a simple greeting — start
            here.
          </p>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
