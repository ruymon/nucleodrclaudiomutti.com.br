import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

interface StatisticsItemProps {
  value: string;
  label: string;
};


export function StatisticsItem({ value, label }: StatisticsItemProps) {
  return (
    <div className="w-full flex flex-col gap-2 text-center border-b md:border-b-0 md:border-r last:border-none border-amber-700/10 py-8 md:py-0 md:px-8 [&:nth-of-type(3)]:sm:border-b-0">
      <Heading as="span" className="text-5xl font-bold" accentColor="brand">{value}</Heading>
      <Paragraph accentColor="brand-light" >{label}</Paragraph>
    </div>
  );
};
