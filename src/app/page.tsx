import { CallToActionSection } from "@/components/sections/CallToAction";
import { ContactSection } from "@/components/sections/Contact";
import { DoctorGreetSection } from "@/components/sections/DoctorGreet";
import { FeaturesSection } from "@/components/sections/Features";
import { HeroSection } from "@/components/sections/Hero";
import { StatisticsSection } from "@/components/sections/Statistics";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-32">
      <HeroSection />
      <StatisticsSection />
      <FeaturesSection />
      <DoctorGreetSection />
      <CallToActionSection />
      <ContactSection /> 
    </main>
  )
}
