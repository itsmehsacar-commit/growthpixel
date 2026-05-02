import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  LineChart,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { Section } from "../components/Section";
import { ServiceCard } from "../components/ServiceCard";
import { Stat } from "../components/Stat";
import { TestimonialCard } from "../components/TestimonialCard";
import { api } from "../lib/api";
import type { CaseStudy, Service, Testimonial } from "../lib/types";

const LOGO_BAR = [
  "Lumen Health",
  "Northwind",
  "Brewly",
  "Vela Logistics",
  "Hyperion Labs",
  "Atlas Cloud",
  "Forma",
  "Soundwave",
];

const PROCESS_STEPS = [
  {
    icon: Sparkles,
    title: "Discovery & audit",
    description:
      "We dive into your data, market, and funnel to find the highest-leverage growth opportunities.",
  },
  {
    icon: Workflow,
    title: "Strategy sprint",
    description:
      "A clear 90-day roadmap with channel priorities, target KPIs, and creative concepts you can ship immediately.",
  },
  {
    icon: Rocket,
    title: "Launch & scale",
    description:
      "Senior operators run your campaigns daily — paid media, SEO, content, and creative all dialed in.",
  },
  {
    icon: LineChart,
    title: "Iterate weekly",
    description:
      "Live dashboards, weekly readouts, and a relentless testing cadence keep growth compounding.",
  },
];

const VALUE_PROPS = [
  {
    icon: ShieldCheck,
    title: "Senior operators only",
    description:
      "No junior account managers. The senior strategist who pitches you is the one running your account.",
  },
  {
    icon: Zap,
    title: "Built for speed",
    description:
      "Most agencies talk for weeks. We ship in days — landing pages, ads, and content live in your first sprint.",
  },
  {
    icon: LineChart,
    title: "ROI-obsessed",
    description:
      "Every dollar tied to a model. We optimize for pipeline, payback, and LTV — not vanity dashboards.",
  },
];

export default function Home() {
  const [services, setServices] = useState<Service[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    Promise.all([api.getServices(), api.getTestimonials(), api.getCaseStudies()])
      .then(([s, t, c]) => {
        if (cancelled) return;
        setServices(s);
        setTestimonials(t);
        setCaseStudies(c);
      })
      .catch((e: unknown) => {
        if (cancelled) return;
        setError(e instanceof Error ? e.message : "Failed to load content");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <Hero />

      <LogoBar />

      <Section
        id="services"
        eyebrow="What we do"
        title={
          <>
            A full-stack growth team,
            <br className="hidden sm:block" />
            without the agency overhead.
          </>
        }
        description="From SEO to creative production, every channel is handled by senior practitioners who actually ship the work."
      >
        {error && (
          <p className="mb-8 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-200">
            {error}
          </p>
        )}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why teams pick GrowthPixel"
        title="Built for compounding growth, not retainers."
        description="We're a small, senior team that operates like an embedded growth pod. You get strategy and execution from the same humans, week after week."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {VALUE_PROPS.map((prop) => (
            <div
              key={prop.title}
              className="surface-card surface-card-hover p-6 lg:p-7"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-300 ring-1 ring-white/10">
                <prop.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">
                {prop.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Recent work"
        title="Case studies that move the bottom line."
        description="A snapshot of what we've shipped for our clients in the last 12 months."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/work" className="btn-secondary">
            View all case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Our process"
        title="A 4-step engine that ships in days, not months."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.title}
              className="surface-card surface-card-hover p-6 lg:p-7 relative overflow-hidden"
            >
              <span className="absolute right-5 top-5 font-display text-5xl font-bold text-white/5">
                0{idx + 1}
              </span>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/30">
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Loved by founders & marketers"
        title="What our clients say."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="absolute inset-0 -z-10 bg-grid-glow" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(139,92,246,0.18),transparent)]"
        aria-hidden
      />

      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <span className="badge">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Now booking Q2 engagements · 3 spots left
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Digital marketing that{" "}
            <span className="gradient-text">compounds revenue.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
            GrowthPixel is the senior-led growth team behind ambitious brands.
            We blend SEO, paid media, social, and content into one engine —
            engineered to compound.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="btn-primary !px-7 !py-3.5 text-base">
              Get a free growth plan
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/work" className="btn-secondary !px-7 !py-3.5 text-base">
              See client results
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              No long-term contracts
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Senior strategists only
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              30-day onboarding
            </li>
          </ul>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat value="$214M+" label="Tracked client revenue" />
          <Stat value="4.6x" label="Average ROAS" />
          <Stat value="184K" label="Organic sessions / mo" />
          <Stat value="98%" label="Client retention" />
        </div>
      </div>
    </section>
  );
}

function LogoBar() {
  const items = [...LOGO_BAR, ...LOGO_BAR];
  return (
    <div className="border-y border-white/5 bg-white/[0.015]">
      <div className="container-page py-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Trusted by teams at
        </p>
        <div className="relative mt-5 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink-950 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink-950 to-transparent"
            aria-hidden
          />
          <div className="flex w-max animate-marquee gap-12 whitespace-nowrap text-slate-400/90">
            {items.map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="font-display text-xl font-semibold tracking-tight"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FinalCta() {
  return (
    <section className="container-page my-12">
      <div className="surface-card gradient-border overflow-hidden p-10 sm:p-14 text-center">
        <div className="absolute inset-0 -z-10 bg-grid-glow opacity-70" aria-hidden />
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Ready to grow without the agency drag?
        </h2>
        <p className="mt-4 text-base text-slate-300 sm:text-lg">
          Book a 30-minute strategy call. We'll review your funnel and walk you
          through a custom growth plan — even if you don't end up working with us.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/contact" className="btn-primary !px-7 !py-3.5 text-base">
            Book your strategy call
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/services" className="btn-secondary !px-7 !py-3.5 text-base">
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
