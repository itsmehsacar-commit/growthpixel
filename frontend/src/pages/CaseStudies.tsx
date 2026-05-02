import { useEffect, useState } from "react";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { Section } from "../components/Section";
import { api } from "../lib/api";
import type { CaseStudy } from "../lib/types";

export default function CaseStudies() {
  const [items, setItems] = useState<CaseStudy[]>([]);

  useEffect(() => {
    api.getCaseStudies().then(setItems).catch(() => setItems([]));
  }, []);

  return (
    <>
      <section className="container-page pt-16 pb-8 sm:pt-24">
        <div className="max-w-3xl">
          <span className="badge">Case studies</span>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Real numbers. <span className="gradient-text">Real impact.</span>
          </h1>
          <p className="mt-5 text-lg text-slate-300">
            We measure ourselves on the metrics that move your business —
            pipeline, payback, ROAS, and LTV. Not impressions.
          </p>
        </div>
      </section>

      <Section title="Selected work" eyebrow="Last 12 months">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      </Section>
    </>
  );
}
