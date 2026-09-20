import { useEffect } from "react";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

const FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

function isStaleChunkError(error: unknown): boolean {
  const message = errorMessage(error);
  return (
    message.includes("Failed to fetch dynamically imported module") ||
    message.includes("Importing a module script failed") ||
    message.includes("error loading dynamically imported module")
  );
}

const RELOAD_FLAG_KEY = "brook-of-destiny-stale-chunk-reload";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  const staleChunk = isStaleChunkError(error);

  useEffect(() => {
    if (!staleChunk) return;

    const alreadyReloaded = sessionStorage.getItem(RELOAD_FLAG_KEY);
    if (alreadyReloaded) return;

    sessionStorage.setItem(RELOAD_FLAG_KEY, "1");
    window.location.reload();
  }, [staleChunk]);

  if (staleChunk) {
    return (
      <main
        className={
          "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center " +
          "bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50"
        }
      >
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Updating to the latest version…
        </p>
      </main>
    );
  }

  return (
    <main
      className={
        "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center " +
        "bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50"
      }
    >
      <span className="text-red-500" aria-hidden="true">
        <TriangleAlert className="size-10" strokeWidth={2} />
      </span>
      <h1 className="text-lg font-semibold">Something went wrong</h1>
      <p className="max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400">
        {errorMessage(error)}
      </p>
    </main>
  );
}