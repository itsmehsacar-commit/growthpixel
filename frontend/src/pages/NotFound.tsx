import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-page py-32 text-center">
      <p className="font-display text-7xl font-bold gradient-text">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold text-white">
        We can't find that page.
      </h1>
      <p className="mt-3 text-slate-400">
        The link might be outdated. Head back to the homepage and we'll point
        you to the right place.
      </p>
      <Link to="/" className="btn-primary mt-8">
        <ArrowLeft className="h-4 w-4" />
        Back home
      </Link>
    </section>
  );
}
