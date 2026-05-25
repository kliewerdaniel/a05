import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Surface } from "@/components/ui/surface";

interface CTASectionProps {
  headline: string;
  body: string;
  buttonText: string;
  buttonUrl: string;
  variant?: "default" | "subtle" | "prominent";
  secondaryText?: string;
}

export function CTASection({
  headline,
  body,
  buttonText,
  buttonUrl,
  variant = "default",
  secondaryText,
}: CTASectionProps) {
  const isProminent = variant === "prominent";

  return (
    <section className={cn("section-shell", isProminent && "pt-0")}>
      <div className="container-page">
        <Surface
          variant={isProminent ? "glass" : "outline"}
          className={cn(
            "relative overflow-hidden p-8 text-center sm:p-10 lg:p-12",
            isProminent && "bg-hero-glow",
          )}
        >
          {isProminent && (
            <div className="absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,white,transparent_90%)]">
              <div className="absolute inset-0 bg-mesh bg-[length:28px_28px] opacity-30" />
            </div>
          )}

          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              <span>Next step</span>
            </div>
            <div className="space-y-4">
              <h2 className="section-heading mx-auto">{headline}</h2>
              <p className="lead-copy mx-auto max-w-2xl">{body}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-6 text-base">
                <Link href={buttonUrl}>
                  {buttonText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              {isProminent && (
                <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base">
                  <Link href="/contact">
                    <CalendarDays className="h-4 w-4" />
                    Book a call
                  </Link>
                </Button>
              )}
            </div>
            {secondaryText && (
              <p className="text-sm leading-6 text-muted-foreground">{secondaryText}</p>
            )}
          </div>
        </Surface>
      </div>
    </section>
  );
}
