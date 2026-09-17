import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function CopyField({
  label,
  value,
  large = false,
}: {
  label: string;
  value: string;
  large?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success(`${label} copied`);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Could not copy — please copy it by hand.");
    }
  }

  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
        {label}
      </p>
      <button
        type="button"
        onClick={copy}
        className={cn(
          "flex min-h-11 items-center justify-between gap-3 rounded-lg border border-gold/40 bg-cream px-4 py-2 text-left text-forest transition-colors duration-150 hover:bg-gold-soft",
          large && "py-3",
        )}
      >
        <span
          className={cn(
            "font-display font-semibold tracking-wide",
            large ? "text-3xl" : "text-xl",
          )}
        >
          {value}
        </span>
        {copied ? (
          <Check className="size-4 shrink-0 text-forest-mid" />
        ) : (
          <Copy className="size-4 shrink-0 text-gold-deep" />
        )}
      </button>
    </div>
  );
}
