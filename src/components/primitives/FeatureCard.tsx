import { IFeatureItem } from "@/@types/features";
import { Check } from "@/assets/Icons";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

interface FeatureCardProps extends IFeatureItem {};

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="w-full flex flex-col gap-6 p-6 border rounded-xl bg-white border-gray-100 h-fit ">
      <div className="p-2 w-fit rounded-full text-amber-700 bg-amber-700/10">
        <Check size={16}/>
      </div>

      <div className="flex flex-col gap-2">
        <Heading as="h3">{ title }</Heading>
        <Paragraph accentColor="gray-light">{ description }</Paragraph>
      </div>
    </div>
  );
};
