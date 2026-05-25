"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { CTASection } from "@/components/sections/cta-section";
import { CONTACT_POINTS, SITE } from "@/lib/constants";
import { Surface } from "@/components/ui/surface";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  projectType: z.enum(["", "knowledge-systems", "automation", "local-ai", "website", "other"]),
  budget: z.enum(["", "under-5k", "5k-10k", "10k-25k", "25k-plus"]),
  message: z.string().min(10, "Please provide some details about your project"),
  consent: z.boolean().refine((value) => value, {
    message: "You must agree to be contacted",
  }),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      projectType: "",
      budget: "",
      consent: false,
    },
  });

  const consent = watch("consent");

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    setState("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to send message");
      setState("success");
    } catch {
      setState("error");
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell me what you’re building."
        description="If the project is real, I’ll reply with a concrete point of view on how to approach it. Expect a clear response within 48 hours."
        primaryAction={{ label: "View services", href: "/services" }}
        secondaryAction={{ label: "Read writing", href: "/blog" }}
      />

      <section className="section-shell pt-0">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <Surface variant="outline" className="p-6 sm:p-8">
              {state === "success" ? (
                <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-14 w-14 text-success" />
                  <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-foreground">
                    Message received.
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
                    Thanks for the note. I’ll review it and follow up within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" {...register("name")} />
                      {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="you@company.com" {...register("email")} />
                      {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Company name (optional)" {...register("company")} />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project type</Label>
                      <select
                        id="projectType"
                        {...register("projectType")}
                        className="input-shell"
                      >
                        <option value="">Select a type…</option>
                        <option value="knowledge-systems">Knowledge systems</option>
                        <option value="automation">Workflow automation</option>
                        <option value="local-ai">Local AI deployment</option>
                        <option value="website">AI-powered website</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget range</Label>
                      <select id="budget" {...register("budget")} className="input-shell">
                        <option value="">Select a range…</option>
                        <option value="under-5k">Under $5k</option>
                        <option value="5k-10k">$5k – $10k</option>
                        <option value="10k-25k">$10k – $25k</option>
                        <option value="25k-plus">$25k+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project details</Label>
                    <Textarea
                      id="message"
                      placeholder="What are you building, what constraints matter, and what does success look like?"
                      {...register("message")}
                    />
                    {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                  </div>

                  <div className="space-y-3 rounded-2xl border border-border/70 bg-muted/20 p-4">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="consent"
                        checked={consent}
                        onCheckedChange={(checked) =>
                          setValue("consent", checked === true, { shouldValidate: true })
                        }
                      />
                      <div className="space-y-1">
                        <Label htmlFor="consent">Consent to be contacted</Label>
                        <p className="text-sm leading-6 text-muted-foreground">
                          I agree to be contacted about this project.
                        </p>
                      </div>
                    </div>
                    {errors.consent && <p className="text-sm text-destructive">{errors.consent.message}</p>}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button type="submit" size="lg" className="h-12 px-6" disabled={state === "submitting"}>
                      {state === "submitting" ? "Sending…" : "Send message"}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                    {state === "error" && (
                      <div className="flex items-center gap-2 text-sm text-destructive">
                        <AlertCircle className="h-4 w-4" />
                        Something went wrong. Try again or email directly.
                      </div>
                    )}
                  </div>
                </form>
              )}
            </Surface>

            <div className="space-y-5">
              <Surface variant="glass" className="p-6">
                <div className="eyebrow">
                  <span className="eyebrow-dot" />
                  <span>Quick facts</span>
                </div>
                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Response time</dt>
                    <dd className="mt-1 font-medium text-foreground">{CONTACT_POINTS.responseTime}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Typical budget</dt>
                    <dd className="mt-1 font-medium text-foreground">{CONTACT_POINTS.budgetRange}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Location</dt>
                    <dd className="mt-1 font-medium text-foreground">{CONTACT_POINTS.location}</dd>
                  </div>
                </dl>
              </Surface>

              <Surface variant="outline" className="p-6">
                <div className="eyebrow">
                  <span className="eyebrow-dot" />
                  <span>What happens next</span>
                </div>
                <ol className="mt-5 space-y-3">
                  {CONTACT_POINTS.steps.map((step, index) => (
                    <li key={step} className="flex items-start gap-3 text-sm leading-7 text-muted-foreground">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </Surface>

              <Surface variant="outline" className="p-6">
                <div className="eyebrow">
                  <span className="eyebrow-dot" />
                  <span>Email</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Prefer email? Reach me at{" "}
                  <a href={`mailto:${SITE.email}`} className="font-medium text-primary">
                    {SITE.email}
                  </a>
                </p>
              </Surface>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Need a second opinion before you commit?"
        body="A short conversation usually reveals the architectural shape of the problem."
        buttonText="Book a consultation"
        buttonUrl="/services"
      />
    </>
  );
}
