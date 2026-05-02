import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-6 shadow-sm border border-gray-100",
        hover && "transition-all duration-300 hover:shadow-md hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
