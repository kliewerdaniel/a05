import * as React from "react";
import { cn } from "@/lib/utils";

type SurfaceVariant = "default" | "elevated" | "glass" | "outline";

const variantClasses: Record<SurfaceVariant, string> = {
  default: "border border-border/70 bg-surface shadow-soft",
  elevated:
    "border border-border/70 bg-surface shadow-lift transition-shadow duration-300 hover:shadow-glow",
  glass: "border border-white/10 bg-white/5 backdrop-blur-xl shadow-soft",
  outline: "border border-border/80 bg-transparent",
};

export interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SurfaceVariant;
}

export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-[1.5rem]", variantClasses[variant], className)}
      {...props}
    />
  ),
);
Surface.displayName = "Surface";

