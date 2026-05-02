import { Link } from "react-router-dom";
import { ArrowRight, Compass, HeartHandshake, Sparkles } from "lucide-react";
import { Section } from "../components/Section";
import { Stat } from "../components/Stat";

const VALUES = [
  {
    icon: Compass,
    title: "Senior-led, always",
    description:
      "The strategists who scope the work are the same humans running the campaigns. No bait-and-switch.",
  },
  {
    icon: HeartHandshake,
    title: "Skin in the game",
    description:
      "We tie compensation to performance whenever we can — so we win when you win.",
  },
  {
    icon: Sparkles,
    title: "Craft over noise",
    description:
      "The work is the work. We obsess over the small details that compound into outsized results.",
  },
];

const TEAM = [
  {
    name: "Maya Patel",
    role: "Founder & CEO",
    bio: "Ex-Head of Growth at two YC unicorns. 12 years scaling paid acquisition.",
    initials: "MP",
  },
  {
    name: "Jordan Lee",
    role: "Head of Creative",
    bio: "Award-winning creative director who's shipped 8-figure ad campaigns for DTC brands.",
    initials: "JL",
  },
  {
    name: "Priya Nair",
    role: "Head of SEO",
    bio: "Programmatic SEO specialist. Scaled organic to 8M monthly sessions at her last role.",
    initials: "PN",
  },
  {
    name: "Sam Okafor",
    role: "Head of Analytics",
    bio: "Server-side tracking nerd. Builds the dashboards CMOs actually trust.",
    initials: "SO",
  },
];

export default function About() {
  return (
    <>
      <section className="container-page pt-16 pb-8 sm:pt-24">
        <div className="max-w-3xl">
          <span className="badge">About</span>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
            We started GrowthPixel for a reason:{" "}
            <span className="gradient-text">most agencies are broken.</span>
          </h1>
          <p className="mt-5 text-lg text-slate-300">
            Bloated retainers. Junior account managers running million-dollar
            budgets. Strategy decks that never ship. We built GrowthPixel as the
            antidote — a small, senior team that does the actual work.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat value="2019" label="Founded" />
          <Stat value="60+" label="Brands served" />
          <Stat value="14" label="Senior operators" />
          <Stat value="98%" label="Client retention" />
        </div>
      </section>

      <Section eyebrow="What we believe" title="Three principles. Zero exceptions.">
        <div className="grid gap-5 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="surface-card surface-card-hover p-6 lg:p-7">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/30">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="The team" title="Senior operators who've done it before.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <div key={m.name} className="surface-card surface-card-hover p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-base font-bold text-white">
                {m.initials}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">
                {m.name}
              </h3>
              <p className="text-sm font-medium text-brand-300">{m.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {m.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact" className="btn-primary">
            Work with us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
