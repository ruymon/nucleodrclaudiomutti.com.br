import { ISpecialtyItem } from "@/@types/specialties";
import { Check } from "@/assets/phosphor";
import { Heading } from "../primitives/Heading";
import { Paragraph } from "../primitives/Paragraph";

interface SpecialtyCardProps extends ISpecialtyItem {};

export function SpecialtyCard({ title, description }: SpecialtyCardProps) {
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
