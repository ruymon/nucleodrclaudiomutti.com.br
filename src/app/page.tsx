import { CallToActionSection } from "@/components/sections/CallToAction";
import { ContactSection } from "@/components/sections/Contact";
import { DoctorGreetSection } from "@/components/sections/DoctorGreet";
import { HeroSection } from "@/components/sections/Hero";
import { SpecialtiesSection } from "@/components/sections/Specialties";
import { StatisticsSection } from "@/components/sections/Statistics";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <HeroSection />
      <StatisticsSection />
      <SpecialtiesSection />
      <DoctorGreetSection />
      <CallToActionSection />
      <ContactSection />
    </main>
  )
}
