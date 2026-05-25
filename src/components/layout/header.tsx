"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAVIGATION, SITE } from "@/lib/constants";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/78 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/72"
          : "bg-transparent",
      )}
    >
      <nav
        className="container-page flex h-20 items-center justify-between gap-4"
        aria-label="Main navigation"
      >
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-primary-foreground shadow-soft transition-transform group-hover:-translate-y-0.5">
            DK
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-sm font-semibold tracking-[-0.03em] text-foreground">
              {SITE.name}
            </span>
            <span className="text-xs text-muted-foreground">{SITE.location}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-border/70 bg-surface/80 p-1 shadow-soft backdrop-blur md:flex">
          {NAVIGATION.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-background text-foreground shadow-soft"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button asChild size="lg" className="h-11 px-5">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-surface text-foreground shadow-soft"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/70 backdrop-blur-xl md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div
            id="mobile-navigation"
            className="absolute inset-x-4 top-24 rounded-[1.75rem] border border-border/70 bg-surface p-4 shadow-lift"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border/70 px-2 pb-4">
              <div>
                <div className="text-sm font-semibold text-foreground">{SITE.name}</div>
                <div className="text-xs text-muted-foreground">{SITE.description}</div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background text-foreground"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-2 px-1 py-4">
              {NAVIGATION.map((link) => {
                const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-base font-medium transition-colors",
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted/70",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="grid gap-3 border-t border-border/70 px-1 pt-4">
              <Button asChild className="h-12 w-full">
                <Link href="/contact">Contact</Link>
              </Button>
              <Link
                href="/blog"
                className="text-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Read the writing
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
