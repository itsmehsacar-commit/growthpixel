import {
  BarChart3,
  Megaphone,
  Palette,
  PenTool,
  Search,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  search: Search,
  target: Target,
  sparkles: Sparkles,
  pen: PenTool,
  chart: BarChart3,
  palette: Palette,
  megaphone: Megaphone,
};

interface ServiceIconProps {
  name: string;
  className?: string;
}

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const IconComponent = SERVICE_ICONS[name] ?? Sparkles;
  return <IconComponent className={className} />;
}
