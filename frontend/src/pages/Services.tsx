import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Section } from "../components/Section";
import { ServiceCard } from "../components/ServiceCard";
import { api } from "../lib/api";
import type { Service } from "../lib/types";

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    api.getServices().then(setServices).catch(() => setServices([]));
  }, []);

  return (
    <>
      <section className="container-page pt-16 pb-8 sm:pt-24">
        <div className="max-w-3xl">
          <span className="badge">Services</span>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Every channel, <span className="gradient-text">handled by senior operators.</span>
          </h1>
          <p className="mt-5 text-lg text-slate-300">
            Pick a single service or bundle them into a fully integrated growth
            engine. Either way, the same senior team owns the work end to end.
          </p>
        </div>
      </section>

      <Section title="Services" eyebrow="What we ship">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} variant="full" />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Bundled engagements"
        title="Three ways to engage."
        description="Most clients start with a single channel and expand once they see the results. Pick the fit, and we'll tailor the scope to your stage."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              name: "Single Channel",
              description:
                "One channel, run by senior operators. Perfect if you have a clear bottleneck to break through.",
              points: [
                "Dedicated channel lead",
                "Bi-weekly strategy reviews",
                "Live performance dashboard",
              ],
            },
            {
              name: "Growth Pod",
              description:
                "Two to three channels working in lockstep. Most popular for series A / B brands ready to scale.",
              points: [
                "Multi-channel orchestration",
                "Weekly executive readouts",
                "Embedded creative + content support",
              ],
              featured: true,
            },
            {
              name: "Fractional CMO",
              description:
                "Senior strategic leadership plus full-stack execution. Ideal for teams without a CMO yet.",
              points: [
                "Quarterly board-ready reporting",
                "Hiring & vendor evaluation support",
                "Full marketing roadmap ownership",
              ],
            },
          ].map((tier) => (
            <div
              key={tier.name}
              className={`surface-card p-6 lg:p-8 flex flex-col ${
                tier.featured ? "gradient-border ring-1 ring-brand-400/30" : ""
              }`}
            >
              {tier.featured && (
                <span className="badge !text-brand-200 !border-brand-400/40">
                  Most popular
                </span>
              )}
              <h3 className="mt-2 font-display text-xl font-semibold text-white">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{tier.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                {tier.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-400 to-accent-400" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-6 ${tier.featured ? "btn-primary" : "btn-secondary"}`}
              >
                Get a proposal
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
