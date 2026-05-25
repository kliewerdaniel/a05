import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Surface } from "@/components/ui/surface";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-[80vh] items-center">
      <div className="container-page">
        <Surface variant="glass" className="mx-auto max-w-3xl p-8 text-center sm:p-10 lg:p-12">
          <div className="eyebrow mx-auto">
            <span className="eyebrow-dot" />
            <span>404</span>
          </div>
          <h1 className="display-heading mx-auto mt-6">Page not found.</h1>
          <p className="lead-copy mx-auto mt-5 max-w-2xl">
            The page you&apos;re looking for does not exist or has been moved. The useful path
            forward is below.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-6">
              <Link href="/">
                Go home
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6">
              <Link href="/blog">Read the writing</Link>
            </Button>
          </div>
        </Surface>
      </div>
    </div>
  );
}
