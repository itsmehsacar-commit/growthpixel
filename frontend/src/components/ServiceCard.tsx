import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ServiceIcon } from "../lib/serviceIcons";
import type { Service } from "../lib/types";

interface ServiceCardProps {
  service: Service;
  variant?: "compact" | "full";
}

export function ServiceCard({ service, variant = "compact" }: ServiceCardProps) {
  return (
    <Link
      to={`/services#${service.slug}`}
      className="group surface-card surface-card-hover gradient-border p-6 lg:p-7 flex flex-col"
    >
      <div
        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-lg shadow-black/20`}
      >
        <ServiceIcon name={service.icon} className="h-6 w-6" />
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold text-white">
        {service.title}
      </h3>
      <p className="mt-2 text-sm font-medium text-brand-300">{service.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {service.description}
      </p>

      {variant === "full" && (
        <ul className="mt-5 space-y-2">
          {service.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2.5 text-sm text-slate-300"
            >
              <span
                className={`mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r ${service.accent}`}
              />
              {bullet}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-white/80 group-hover:text-white transition">
        Learn more
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
