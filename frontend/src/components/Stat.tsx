interface StatProps {
  value: string;
  label: string;
}

export function Stat({ value, label }: StatProps) {
  return (
    <div className="surface-card p-5 text-center">
      <div className="font-display text-3xl font-bold gradient-text sm:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-slate-400">
        {label}
      </div>
    </div>
  );
}
