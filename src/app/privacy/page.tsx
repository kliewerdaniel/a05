import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Surface } from "@/components/ui/surface";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for this site and contact forms.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Privacy policy"
        description="This site keeps data collection minimal. Contact information is only used to respond to inquiries and support requests."
      />

      <section className="section-shell pt-0">
        <div className="container-page">
          <Surface variant="outline" className="mx-auto max-w-3xl space-y-6 p-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">What we collect</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                If you submit a form, the site may store the information you provide so it can be
                used to respond to your request. No unnecessary tracking or behavioral profiling is
                the default intent of the site.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">How it is used</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                Submitted information is used to evaluate project fit, reply to messages, and
                maintain basic communication about the project you asked about.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">Questions</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                If you have questions about privacy or data handling, email{" "}
                <a href="mailto:danielkliewer@gmail.com" className="font-medium text-primary">
                  danielkliewer@gmail.com
                </a>
                .
              </p>
            </div>
          </Surface>
        </div>
      </section>
    </>
  );
}
