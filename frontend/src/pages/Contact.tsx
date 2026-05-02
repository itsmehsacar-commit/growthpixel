import { useEffect, useState } from "react";
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { api } from "../lib/api";
import type { Service } from "../lib/types";

const BUDGETS = [
  "< $5k / mo",
  "$5k–10k / mo",
  "$10k–25k / mo",
  "$25k–50k / mo",
  "> $50k / mo",
];

interface FormState {
  name: string;
  email: string;
  company: string;
  budget: string;
  services: string[];
  message: string;
}

const INITIAL: FormState = {
  name: "",
  email: "",
  company: "",
  budget: "",
  services: [],
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [services, setServices] = useState<Service[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    api.getServices().then(setServices).catch(() => setServices([]));
  }, []);

  const toggleService = (slug: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(slug)
        ? prev.services.filter((s) => s !== slug)
        : [...prev.services, slug],
    }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await api.submitContact({
        name: form.name.trim(),
        email: form.email.trim(),
        company: form.company.trim() || undefined,
        budget: form.budget || undefined,
        services: form.services.length ? form.services : undefined,
        message: form.message.trim(),
      });
      setSuccess(true);
      setForm(INITIAL);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="container-page pt-16 pb-8 sm:pt-24">
        <div className="max-w-3xl">
          <span className="badge">Contact</span>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Let's build your <span className="gradient-text">growth engine.</span>
          </h1>
          <p className="mt-5 text-lg text-slate-300">
            Tell us where you are and where you want to go. We'll come back
            within one business day with a proposal — or honest advice if we're
            not the right fit.
          </p>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="surface-card gradient-border p-6 sm:p-8">
            {success ? (
              <SuccessState onReset={() => setSuccess(false)} />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="label-base">
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-base"
                      placeholder="Maya Patel"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="label-base">
                      Work email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input-base"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="label-base">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="input-base"
                      placeholder="GrowthPixel Inc."
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="label-base">
                      Monthly budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="input-base appearance-none"
                    >
                      <option value="">Select a range</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <span className="label-base">What do you need help with?</span>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => {
                      const active = form.services.includes(s.slug);
                      return (
                        <button
                          key={s.slug}
                          type="button"
                          onClick={() => toggleService(s.slug)}
                          aria-pressed={active}
                          className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                            active
                              ? "border-brand-400 bg-brand-500/20 text-white"
                              : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white"
                          }`}
                        >
                          {s.title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="label-base">
                    Tell us about your goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input-base resize-none"
                    placeholder="What are you trying to grow? Where are you stuck?"
                  />
                </div>

                {error && (
                  <p className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-200">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full sm:w-auto"
                  data-testid="contact-submit"
                >
                  {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                  {submitting ? "Sending…" : "Send message"}
                </button>
                <p className="text-xs text-slate-500">
                  By submitting, you agree to receive a single follow-up email from us. No marketing lists, no spam.
                </p>
              </form>
            )}
          </div>

          <ContactSidebar />
        </div>
      </section>
    </>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div
      className="flex flex-col items-start gap-4 py-6"
      data-testid="contact-success"
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30">
        <CheckCircle2 className="h-6 w-6" />
      </div>
      <h2 className="font-display text-2xl font-semibold text-white">
        Message received.
      </h2>
      <p className="text-sm leading-relaxed text-slate-300">
        Thanks for reaching out. A senior strategist will get back to you within
        one business day with next steps and any questions we have about your
        business.
      </p>
      <button type="button" onClick={onReset} className="btn-secondary mt-2">
        Send another message
      </button>
    </div>
  );
}

function ContactSidebar() {
  return (
    <aside className="space-y-5">
      <div className="surface-card p-6">
        <h3 className="font-display text-lg font-semibold text-white">
          Prefer to email?
        </h3>
        <ul className="mt-4 space-y-3 text-sm text-slate-300">
          <li className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-brand-300" />
            hello@growthpixel.io
          </li>
          <li className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-brand-300" />
            +1 (415) 555-0142
          </li>
          <li className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-brand-300" />
            San Francisco · New York · Remote
          </li>
        </ul>
      </div>

      <div className="surface-card p-6">
        <h3 className="font-display text-lg font-semibold text-white">
          What happens next
        </h3>
        <ol className="mt-4 space-y-4 text-sm text-slate-300">
          {[
            "We review your message and pull a quick benchmark on your category.",
            "A senior strategist replies within one business day to schedule a 30-min call.",
            "If we're a fit, you get a custom growth plan and proposal in one week.",
          ].map((step, idx) => (
            <li key={step} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-xs font-bold text-white">
                {idx + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
}
