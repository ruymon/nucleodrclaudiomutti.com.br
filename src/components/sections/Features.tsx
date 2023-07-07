import { features } from "@/helpers/features";
import { FeatureCard } from "../primitives/FeatureCard";
import { Heading } from "../primitives/Heading";
import { Paragraph } from "../primitives/Paragraph";

interface FeaturesSectionProps {};

export function FeaturesSection({}: FeaturesSectionProps) {
  return (
    <section className="wrapper flex flex-col items-center gap-16">
      <div className="flex flex-col gap-4 lg:max-w-md items-center text-center">
        <Paragraph variant="hat" accentColor={"brand"}>SERVIÇOS</Paragraph>
        <Heading as="h2">Como podemos ajudá-lo a se sentir melhor?</Heading>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        { features.map((feature, i) => <FeatureCard key={i} {...feature} /> )}
      </div>
    </section>
  );
};
