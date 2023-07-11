"use client";

import { CaretDoubleDown, WhatsappLogo } from "@/assets/Icons";
import wavingHand from "@/assets/waving-hand.png";
import Image from "next/image";
import { Button } from "../primitives/Button";
import { Heading } from "../primitives/Heading";
import { Paragraph } from "../primitives/Paragraph";

interface HeroSectionProps {};

export function HeroSection({}: HeroSectionProps) {
  return (
    <section id="hero" className="wrapper h-fit py-20 lg:py-0 lg:h-[calc(100vh-4rem)] items-center lg:items-start flex lg:justify-between lg:gap-16">
      <aside className="h-full justify-center flex flex-col gap-16 w-full grow text-center items-center lg:text-left lg:items-start">
        <div className="flex flex-col gap-4">
          <Paragraph variant="hat" accentColor="brand" className="flex items-center gap-2 justify-center lg:justify-start">
            <Image width={16} height={16} src={wavingHand} alt="Mão acenando"/>
            BOAS-VINDAS AO NÚCLEO CLAUDIO MUTTI
          </Paragraph>
          <Heading as="h1" fontWeight="extrabold">Sua melhor versão começa agora!</Heading>
          <Paragraph size="large" accentColor="gray-light">Nossa metodologia vai além dos sintomas, atendemos de forma personalizada em busca de proporcionar bem-estar e longevidade.</Paragraph>
        </div>
        
        <div className="flex items-center gap-4 flex-col sm:flex-row">
          <Button size="lg">
            <WhatsappLogo size={20} />
            AGENDE SUA CONSULTA
          </Button>
          <Button variant="link">
            SAIBA MAIS
            <CaretDoubleDown size={14} />
          </Button>
        </div>
      </aside>

      <figure className="hidden lg:flex w-full h-[90%] max-w-[40%]">
        <Image 
          width={1920} 
          height={1280}
          className="h-full w-full object-cover object-right rounded-b-3xl"
          src="/images/hero-banner.jpg" 
          alt="Hero Banner"
        />
      </figure>
    </section>
  );
};
