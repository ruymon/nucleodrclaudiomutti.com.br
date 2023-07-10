import { CaretDoubleDown, WhatsappLogo } from "@/assets/Icons";
import wavingHand from "@/assets/waving-hand.png";
import Image from "next/image";
import { Button } from "../primitives/Button";
import { Heading } from "../primitives/Heading";
import { Paragraph } from "../primitives/Paragraph";

interface HeroSectionProps {};

export function HeroSection({}: HeroSectionProps) {
  return (
    <section className="wrapper h-[calc((100vh-4rem)-((100vh-4rem)/4))] flex justify-between gap-16">
      <aside className="h-full justify-center flex flex-col gap-16 w-full grow">
        <div className="flex flex-col gap-4">
          <Paragraph variant="hat" accentColor="brand" className="flex items-center gap-2">
            <Image width={16} height={16} src={wavingHand} alt="Mão acenando"/>
            BOAS-VINDAS AO NÚCLEO CLAUDIO MUTTI
          </Paragraph>
          <Heading as="h1" fontWeight="extrabold">Sua melhor versão começa agora!</Heading>
          <Paragraph size="large" accentColor="gray-light">Nossa metodologia vai além dos sintomas, atendemos de forma personalizada em busca de proporcionar bem-estar e longevidade.</Paragraph>
        </div>
        
        <div className="flex items-center gap-4">
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

      <figure className="w-full h-full max-w-[40%]">
        <Image 
          width={1161} 
          height={80}
          className="h-full w-full object-cover object-right rounded-b-3xl"
          src="https://images.unsplash.com/photo-1631248055158-edec7a3c072b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Banner" 
        />
      </figure>
    </section>
  );
};