"use client";

import { features } from "@/helpers/features";
import { Section } from 'react-scroll-section';
import { FeatureCard } from "../primitives/FeatureCard";
import { Heading } from "../primitives/Heading";
import { Paragraph } from "../primitives/Paragraph";

interface FeaturesSectionProps {};

export function FeaturesSection({}: FeaturesSectionProps) {
  return (
    <Section id="features" className="wrapper flex flex-col items-center gap-16 mt-20">
      <div className="flex flex-col gap-4 lg:max-w-md items-center text-center">
        <Paragraph variant="hat" accentColor={"brand"}>ESPECIALIDADES</Paragraph>
        <Heading as="h2">Como podemos ajudá-lo a se sentir melhor?</Heading>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        { features.map((feature, i) => <FeatureCard key={i} {...feature} /> )}
      </div>
    </Section>
  );
};

// export function FeaturesSection({}: FeaturesSectionProps) {
//   return (
//     <section className="wrapper flex justify-between gap-24">
//       <div className="flex flex-col gap-8 lg:max-w-md sticky top-28 h-fit">
//         <div className="flex flex-col gap-4 ">
//           <Paragraph variant="hat" accentColor={"brand"}>ESPECIALIDADES</Paragraph>
//           <Heading as="h2">Como podemos ajudá-lo a se sentir melhor?</Heading>
//           <Paragraph accentColor="gray-light">Conheça nossas especialidades e encontre o caminho para uma vida mais saudável e equilibrada!</Paragraph>
//         </div>
        
//         <Separator />

//       </div>

//       <div className="w-full flex flex-col gap-9">
//         {features.map((feature, i) => <FeatureCard key={i} {...feature} />)}
//       </div>
//     </section>
//   );
// };
