import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Section } from "../components/Section";

const TIERS = [
  {
    name: "Launch",
    price: "$4,500",
    cadence: "/ month",
    description: "Single channel, senior-led. Perfect for early-stage brands.",
    features: [
      "1 channel: SEO, paid, or social",
      "Strategy + execution",
      "Live performance dashboard",
      "Bi-weekly review calls",
      "Slack support",
    ],
    cta: "Start with Launch",
    featured: false,
  },
  {
    name: "Growth Pod",
    price: "$9,800",
    cadence: "/ month",
    description: "Multi-channel growth pod. Our most popular plan.",
    features: [
      "Up to 3 channels orchestrated",
      "Embedded creative + content",
      "Weekly executive readouts",
      "Quarterly strategy offsite",
      "Priority Slack support",
      "Server-side tracking + GA4 setup",
    ],
    cta: "Talk to growth team",
    featured: true,
  },
  {
    name: "Fractional CMO",
    price: "Custom",
    cadence: "",
    description: "Strategic leadership + full-stack execution.",
    features: [
      "Senior CMO embedded with your team",
      "Roadmap ownership end-to-end",
      "Vendor + hiring support",
      "Board-ready reporting",
      "All Growth Pod features included",
    ],
    cta: "Book intro call",
    featured: false,
  },
];

const FAQS = [
  {
    q: "Do you offer one-off projects?",
    a: "Yes — landing page builds, attribution audits, and creative sprints are common one-offs. We'll always recommend the cheapest option that gets you to your goal.",
  },
  {
    q: "What's your minimum commitment?",
    a: "Three months. We need at least one full quarter to see the impact of the work and iterate based on data. After that it's month-to-month.",
  },
  {
    q: "Do prices include ad spend?",
    a: "No. Pricing reflects strategy + execution fees only. You keep ownership of all ad accounts and pay platforms directly.",
  },
  {
    q: "How fast can we start?",
    a: "Most clients are live within 7-10 days of signing. Onboarding includes account audits, tracking setup, and the first sprint of creative.",
  },
];

export default function Pricing() {
  return (
    <>
      <section className="container-page pt-16 pb-8 sm:pt-24">
        <div className="max-w-3xl">
          <span className="badge">Pricing</span>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Transparent pricing. <span className="gradient-text">Senior teams.</span>
          </h1>
          <p className="mt-5 text-lg text-slate-300">
            No hidden fees, no junior staff swaps, no quarterly retainer hikes.
            Pick a plan, lock the price, scale when you're ready.
          </p>
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {TIERS.map((tier) => (
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
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-white">
                  {tier.price}
                </span>
                {tier.cadence && (
                  <span className="text-sm text-slate-400">{tier.cadence}</span>
                )}
              </div>
              <ul className="mt-6 space-y-2.5 text-sm text-slate-300">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 mt-0.5 flex-none text-brand-300" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 ${tier.featured ? "btn-primary" : "btn-secondary"}`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Section eyebrow="FAQ" title="Common questions about working together.">
        <div className="grid gap-4 md:grid-cols-2">
          {FAQS.map((item) => (
            <div key={item.q} className="surface-card p-6">
              <h3 className="font-display text-base font-semibold text-white">
                {item.q}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
