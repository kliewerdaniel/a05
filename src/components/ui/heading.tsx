import { cn } from "@/lib/utils";

interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
  tracking?: "tight" | "normal" | "wide";
}

const sizeMap: Record<string, string> = {
  display: "display-heading",
  h1: "text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl",
  h2: "section-heading",
  h3: "text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-[1.75rem]",
  h4: "text-xl font-semibold leading-tight tracking-[-0.02em]",
  h5: "text-lg font-medium leading-tight tracking-[-0.02em]",
  h6: "text-base font-medium leading-tight tracking-[-0.02em]",
};

const trackingMap = {
  tight: "tracking-tight",
  normal: "tracking-normal",
  wide: "tracking-wide",
};

export function Heading({
  as: Component = "h2",
  variant,
  children,
  className,
  tracking = "normal",
}: HeadingProps) {
  const size = variant || Component;

  return (
    <Component
      className={cn("text-balance", sizeMap[size], trackingMap[tracking], className)}
    >
      {children}
    </Component>
  );
}
