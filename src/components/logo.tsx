import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/images/logo.jpeg"
      alt=""
      width={64}
      height={64}
      className={cn(
        "size-11 rounded-full object-cover ring-1 ring-gold/50",
        className,
      )}
    />
  );
}

export function BrandLockup({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      className="group flex min-h-11 items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
    >
      <LogoMark className={compact ? "size-10" : "size-12"} />
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={cn(
            "font-display text-lg font-semibold tracking-tight sm:text-xl",
            inverted ? "text-cream" : "text-forest",
          )}
        >
          Brook of Destiny
        </span>
        <span
          className={cn(
            "text-[0.7rem] font-medium uppercase tracking-[0.16em]",
            inverted ? "text-gold-soft" : "text-gold-deep",
          )}
        >
          Foundation
        </span>
      </span>
    </Link>
  );
}
