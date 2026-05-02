import { Star } from "lucide-react";
import type { Testimonial } from "../lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="surface-card surface-card-hover p-6 lg:p-7 flex flex-col h-full">
      <div className="flex items-center gap-1 text-amber-300">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-4 text-base leading-relaxed text-slate-200">
        "{testimonial.quote}"
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-white/5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-bold text-white">
          {testimonial.avatar_initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{testimonial.name}</div>
          <div className="text-xs text-slate-400">
            {testimonial.role} · {testimonial.company}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
