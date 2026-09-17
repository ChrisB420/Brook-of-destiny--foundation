import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-gold-deep">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold">
        This path is not on our map
      </h1>
      <p className="mt-3 text-muted">
        The page you asked for does not exist. Return home, or see how you can
        walk with us.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/contact">Contact</Link>
        </Button>
      </div>
    </div>
  );
}
