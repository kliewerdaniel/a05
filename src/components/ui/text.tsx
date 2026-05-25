import { cn } from "@/lib/utils";

interface TextProps {
  variant?: "hero" | "lead" | "body" | "small" | "caption" | "tiny";
  as?: "p" | "span" | "div";
  muted?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantMap: Record<string, string> = {
  hero: "lead-copy",
  lead: "text-base leading-7 sm:text-lg sm:leading-8",
  body: "body-copy",
  small: "text-sm leading-6",
  caption: "text-xs leading-5",
  tiny: "text-[11px] font-medium leading-snug tracking-[0.08em] uppercase",
};

export function Text({
  variant = "body",
  as: Component = "p",
  muted = false,
  children,
  className,
}: TextProps) {
  return (
    <Component
      className={cn(
        variantMap[variant],
        muted && "text-muted-foreground",
        className,
      )}
    >
      {children}
    </Component>
  );
}
