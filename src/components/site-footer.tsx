import { Link } from "@tanstack/react-router";
import { BrandLockup } from "@/components/logo";
import { BrookRule } from "@/components/brook-rule";
import { NAV, PROGRAMMES, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <BrandLockup inverted />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/75">
            A Christian non-profit in Lugulu, Bungoma County, Kenya.
          </p>
          <BrookRule className="mt-5 text-gold/80" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
            Visit
          </p>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-gold-soft">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/donate" className="hover:text-gold-soft">
                Donate
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
            Programmes
          </p>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            {PROGRAMMES.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link
                  to="/programmes/$slug"
                  params={{ slug: p.slug }}
                  className="hover:text-gold-soft"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
            Give & reach us
          </p>
          <p className="mt-3 text-sm text-cream/80">
            M-Pesa Paybill <span className="text-gold-soft">{SITE.giving.paybill}</span>
            <br />
            Account <span className="text-gold-soft">{SITE.giving.account}</span>
          </p>
          <p className="mt-3 text-sm text-cream/80">{SITE.location.line}</p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-2 inline-block text-sm text-gold-soft hover:underline"
          >
            {SITE.email}
          </a>
        </div>
      </div>
      <div className="border-t border-gold/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="max-w-md font-display italic text-cream/70">
            “{SITE.verse.text}” — {SITE.verse.ref}
          </p>
        </div>
      </div>
    </footer>
  );
}
