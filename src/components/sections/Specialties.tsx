import { specialties } from "@/helpers/specialties";
import { SpecialtyCard } from "../compositions/SpecialtyCard";
import { Heading } from "../primitives/Heading";
import { Paragraph } from "../primitives/Paragraph";

interface FeaturesSectionProps {};

export function SpecialtiesSection({}: FeaturesSectionProps) {
  return (
    <section id="specialties" className="wrapper flex flex-col items-center gap-16 pt-20">
      <div className="flex flex-col gap-4 lg:max-w-lg items-center text-center">
        <Paragraph variant="hat" accentColor={"brand"}>ESPECIALIDADES</Paragraph>
        <Heading as="h2">Como podemos ajudá-lo a se sentir melhor?</Heading>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        { specialties.map(({title, description}) => <SpecialtyCard key={title} description={description} title={title} /> )}
      </div>
    </section>
  );
};