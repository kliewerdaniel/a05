import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const buttonVariants = {
  primary:
    "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90 hover:shadow-glow",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline:
    "border border-border/80 bg-surface text-foreground shadow-soft hover:border-primary/30 hover:bg-surface/70",
  ghost: "bg-transparent text-foreground hover:bg-muted/70",
  link: "text-primary underline-offset-4 hover:underline",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
};

const sizeVariants = {
  default: "h-11 px-4 py-2",
  sm: "h-10 px-3",
  lg: "h-12 px-6 text-base",
  icon: "h-11 w-11",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          buttonVariants[variant],
          sizeVariants[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

