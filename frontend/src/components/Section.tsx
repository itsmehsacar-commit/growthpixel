import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${className}`}>
      <div className="container-page">
        <div
          className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
        >
          {eyebrow && (
            <span className="badge mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              {eyebrow}
            </span>
          )}
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              {description}
            </p>
          )}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
