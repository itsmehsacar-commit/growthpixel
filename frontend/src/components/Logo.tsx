import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center gap-2 group ${className}`}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-ink-900 ring-1 ring-white/10">
        <svg viewBox="0 0 64 64" className="h-6 w-6">
          <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#a78bfa" />
              <stop offset="0.55" stopColor="#22d3ee" />
              <stop offset="1" stopColor="#f472b6" />
            </linearGradient>
          </defs>
          <path
            d="M14 44 L26 22 L34 32 L42 18 L50 44"
            fill="none"
            stroke="url(#logoGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="44" r="4.5" fill="url(#logoGrad)" />
        </svg>
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-white">
        Growth<span className="gradient-text">Pixel</span>
      </span>
    </Link>
  );
}
