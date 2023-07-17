import wavingHandEmoji from "@/assets/emojis/waving-hand-emoji.png";
import bannerImage from '@/assets/hero-banner.webp';
import { heroContent } from "@/helpers/hero";
import Image from "next/image";
import { KnowMoreButton } from "../compositions/KnowMoreButton";
import { ScheduleAppointmentButton } from "../compositions/ScheduleAppointmentButton";
import { Heading } from "../primitives/Heading";
import { Paragraph } from "../primitives/Paragraph";

interface HeroSectionProps {};

const { hat, title, subtitle } = heroContent;

export function HeroSection({}: HeroSectionProps) {
  return (
    <section id="hero" className="wrapper h-fit py-20 lg:py-0 lg:h-[calc(100vh-4rem)] items-center lg:items-start flex lg:justify-between lg:gap-16">
      <aside className="h-full justify-center flex flex-col gap-16 w-full grow text-center items-center lg:text-left lg:items-start">
        <div className="flex flex-col gap-4 lg:gap-6">
          <Paragraph variant="hat" accentColor="brand" className="flex flex-col sm:flex-row items-center gap-2 justify-center lg:justify-start">
            <Image width={16} height={16} src={wavingHandEmoji} alt="Mão acenando"/>
            {hat}
          </Paragraph>
          <Heading as="h1" fontWeight="extrabold">{title}</Heading>
          <Paragraph size="large" accentColor="gray-light">{subtitle}</Paragraph>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6 flex-col sm:flex-row">
          <ScheduleAppointmentButton customLabel="Agende sua consulta" size="lg" hasWhatsappIcon />
          <KnowMoreButton />
        </div>
      </aside>

      <figure className="hidden lg:flex w-full h-[90%] max-w-[40%]">
        <Image 
          width={500} 
          height={750}
          priority
          placeholder="blur"
          className="h-full w-full object-cover rounded-b-3xl"
          src={bannerImage}
          alt="Hero Banner"
        />
      </figure>
    </section>
  );
};
