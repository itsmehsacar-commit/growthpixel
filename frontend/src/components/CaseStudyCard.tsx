import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "../lib/types";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <article className="surface-card surface-card-hover gradient-border p-6 lg:p-8 flex flex-col">
      <div className="flex items-center justify-between">
        <span className="badge">{caseStudy.industry}</span>
        <ArrowUpRight className="h-5 w-5 text-slate-400" />
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold text-white">
        {caseStudy.client}
      </h3>
      <p className="mt-1 text-base font-medium gradient-text">
        {caseStudy.headline}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {caseStudy.summary}
      </p>

      <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-white/5 pt-5">
        {caseStudy.metrics.map((metric) => (
          <div key={metric.label}>
            <dt className="text-[10px] uppercase tracking-wider text-slate-400">
              {metric.label}
            </dt>
            <dd className="mt-1 font-display text-lg font-bold text-white">
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
