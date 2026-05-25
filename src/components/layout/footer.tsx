import Link from "next/link";
import { Github, Twitter, Linkedin, Youtube, Rss, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Surface } from "@/components/ui/surface";
import { Button } from "@/components/ui/button";

const SOCIAL_LINKS = [
  { href: SITE.links.github, label: "GitHub", icon: Github },
  { href: SITE.links.twitter, label: "Twitter", icon: Twitter },
  { href: SITE.links.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: SITE.links.youtube, label: "YouTube", icon: Youtube },
];

const FOOTER_LINKS = {
  Work: [
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ],
  Writing: [
    { href: "/blog", label: "Blog" },
    { href: "/resources", label: "Resources" },
    { href: "/lab", label: "Lab" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/privacy", label: "Privacy" },
    { href: "/feed.xml", label: "RSS" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background/80">
      <div className="container-page py-16 lg:py-20">
        <Surface variant="glass" className="overflow-hidden p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-primary-foreground shadow-soft">
                  DK
                </span>
                <div>
                  <div className="text-lg font-semibold tracking-[-0.03em] text-foreground">
                    {SITE.name}
                  </div>
                  <p className="text-sm text-muted-foreground">Generative AI Generalist • AI Ops • RLHF</p>
                </div>
              </div>

              <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                AI operations, local systems, and full-stack delivery with a bias toward quality,
                clarity, and measurable outcomes.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Button asChild>
                  <Link href="/contact">
                    Start a project
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={`mailto:${SITE.email}`}>Email directly</a>
                </Button>
              </div>

              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background text-muted-foreground shadow-soft transition-all hover:border-primary/30 hover:text-foreground"
                      aria-label={link.label}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </a>
                  );
                })}
                <a
                  href="/feed.xml"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background text-muted-foreground shadow-soft transition-all hover:border-primary/30 hover:text-foreground"
                  aria-label="RSS feed"
                >
                  <Rss className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
                <div key={heading}>
                  <h2 className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                    {heading}
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-border/70 pt-6">
            <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} {SITE.name}. All rights reserved.
              </p>
              <p>Designed for fast reading, clear intent, and low-friction conversion.</p>
            </div>
          </div>
        </Surface>
      </div>
    </footer>
  );
}
