import { cn } from "@/lib/utils";

export function BrookRule({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 14"
      aria-hidden="true"
      className={cn("h-3 w-40 text-gold", className)}
    >
      <path
        d="M2 9 C 36 2, 54 12, 88 7 S 140 1, 178 8  218 6, 218 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
