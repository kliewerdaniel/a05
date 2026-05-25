import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";
import { Surface } from "@/components/ui/surface";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function KnowledgeGraphPage() {
  return (
    <div className="section-shell pt-28 sm:pt-32 lg:pt-36">
      <div className="container-page">
        <Link
          href="/lab"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Lab
        </Link>

        <Surface variant="glass" className="mx-auto mt-10 max-w-3xl p-8 text-center sm:p-10">
          <Construction className="mx-auto h-16 w-16 text-primary/60" />
          <Heading as="h1" variant="display" className="mt-6">
            Knowledge Graph Explorer
          </Heading>
          <Text variant="hero" className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Interactive visualization of the content ecosystem. The graph interface is under
            active development.
          </Text>
        </Surface>
      </div>
    </div>
  );
}
