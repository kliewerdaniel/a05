import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Surface } from "@/components/ui/surface";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  meta?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  meta,
  className,
}: PageHeaderProps) {
  return (
    <section className={cn("section-shell", className)}>
      <div className="page-grid items-end">
        <div className="max-w-4xl space-y-8">
          {eyebrow && (
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              <span>{eyebrow}</span>
            </div>
          )}
          <div className="space-y-6">
            <h1 className="display-heading text-balance">{title}</h1>
            <p className="lead-copy max-w-2xl">{description}</p>
          </div>
          {(primaryAction || secondaryAction || meta) && (
            <div className="flex flex-col gap-4">
              {meta}
              <div className="flex flex-col gap-3 sm:flex-row">
                {primaryAction && (
                  <Button asChild size="lg" className="h-12 px-6 text-base">
                    <Link href={primaryAction.href}>
                      {primaryAction.label}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {secondaryAction && (
                  <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base">
                    <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>

        <Surface variant="glass" className="relative hidden overflow-hidden p-6 lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(138,143,255,0.22),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(82,211,255,0.12),transparent_35%)]" />
          <div className="relative space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Studio note</p>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              Strategy, design, and implementation are treated as one system. The result is a
              site that reads clearly, loads quickly, and converts without feeling generic.
            </p>
            <div className="grid gap-3 pt-4 text-sm sm:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-background/40 p-4">
                <div className="text-2xl font-semibold text-foreground">Mobile-first</div>
                <div className="mt-1 text-muted-foreground">Compressed layouts that still breathe.</div>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/40 p-4">
                <div className="text-2xl font-semibold text-foreground">Accessible</div>
                <div className="mt-1 text-muted-foreground">Keyboard, contrast, and semantics first.</div>
              </div>
            </div>
          </div>
        </Surface>
      </div>
    </section>
  );
}
