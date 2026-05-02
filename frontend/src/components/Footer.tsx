import { Link } from "react-router-dom";
import { Logo } from "./Logo";

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.062-2.063 2.063 2.063 0 1 1 2.062 2.063zm1.778 13.019H3.555V9h3.56v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.541C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.27V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .297a12 12 0 0 0-3.79 23.39c.6.111.82-.26.82-.578 0-.286-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.382 1.236-3.222-.135-.303-.54-1.527.105-3.183 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 6.003 0c2.295-1.552 3.3-1.23 3.3-1.23.645 1.656.24 2.88.12 3.183.765.84 1.23 1.912 1.23 3.222 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.215 0 1.6-.015 2.887-.015 3.282 0 .315.21.69.825.57A12 12 0 0 0 12 .297" />
    </svg>
  );
}

const FOOTER_LINKS: Array<{ heading: string; links: Array<{ to: string; label: string }> }> = [
  {
    heading: "Services",
    links: [
      { to: "/services#seo", label: "SEO" },
      { to: "/services#ppc", label: "Paid Media" },
      { to: "/services#social", label: "Social" },
      { to: "/services#content", label: "Content" },
      { to: "/services#analytics", label: "Analytics & CRO" },
    ],
  },
  {
    heading: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/work", label: "Case studies" },
      { to: "/blog", label: "Blog" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { to: "/pricing", label: "Pricing" },
      { to: "/blog", label: "Playbooks" },
      { to: "/contact", label: "Get a proposal" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              GrowthPixel is a senior-led digital marketing studio that builds compounding
              acquisition systems for ambitious brands.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/20 transition"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/20 transition"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/20 transition"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {FOOTER_LINKS.map((column) => (
            <div key={column.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                {column.heading}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.to + link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-slate-400 hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} GrowthPixel. All rights reserved.</p>
          <p>
            Built with caffeine, conversion data, and a pixel-perfect obsession.
          </p>
        </div>
      </div>
    </footer>
  );
}
