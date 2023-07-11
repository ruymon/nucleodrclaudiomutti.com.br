"use client";

import { statistics } from "@/helpers/statistics";
import { Section } from 'react-scroll-section';
import { StatisticsItem } from "../primitives/StatisticsItem";

interface StatisticsSectionProps {};

export function StatisticsSection({}: StatisticsSectionProps) {
  return (
    <Section id="statistics" className="wrapper lg:-mt-10">
      <div className="md:place-center grid grid-cols-1 rounded-xl px-6 py-8 sm:grid-cols-2 sm:border sm:border-amber-700/10 sm:bg-amber-700/[2%] md:grid-cols-4 md:place-content-between">
        {statistics.map((item, index) => (
          <StatisticsItem key={index} {...item} />
        ))}
      </div>
    </Section>
  );
};
