import { CallToActionSection } from "@/components/sections/CallToAction";
import { FeaturesSection } from "@/components/sections/Features";
import { HeroSection } from "@/components/sections/Hero";
import { StatisticsSection } from "@/components/sections/Statistics";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-24">
      <HeroSection />
      <StatisticsSection />
      <FeaturesSection />
      {/* TODO: Get to know the Docs Section */}
      <CallToActionSection />
    </main>
  )
}
