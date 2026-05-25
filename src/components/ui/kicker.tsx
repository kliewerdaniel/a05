import { cn } from "@/lib/utils";

interface KickerProps {
  text: string;
  variant?: "default" | "accent";
  className?: string;
}

export function Kicker({ text, variant = "default", className }: KickerProps) {
  return (
    <span
      className={cn(
        "eyebrow",
        variant === "accent" && "border-primary/20 bg-primary/10 text-primary",
        className,
      )}
    >
      {variant === "accent" && <span className="eyebrow-dot" />}
      <span>{text}</span>
    </span>
  );
}
