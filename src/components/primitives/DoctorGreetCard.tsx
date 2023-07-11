import { IDoctor } from "@/@types/doctors";
import Image from "next/image";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { SocialMediaIconButton } from "./SocialMediaIconButton";

interface DoctorGreetCardProps extends IDoctor {
  hat?: string;
};

export function DoctorGreetCard({ hat = 'SOBRE', name, description, image, specialty, social }: DoctorGreetCardProps) {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 keen-slider__slide">
      <figure className="w-full h-64 lg:h-auto lg:max-w-sm relative">
        <Image
          fill
          className="object-cover rounded-xl h-full w-full object-top lg:object-center"
          src={image}
          alt={`Foto do ${name}`}
        />
      </figure>

      <aside className="flex-1 flex flex-col gap-3 items-start text-left lg:pb-3">
        <Paragraph variant="hat">{hat}</Paragraph>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <Heading as="h2" fontWeight="medium" accentColor="gray-light">Prazer,</Heading>
            <Heading as="h2" fontWeight="extrabold">{name}</Heading>
          </div>

          <Paragraph size="large" accentColor="gray-light" className="xl:max-w-[90%]">{description}</Paragraph>

          <div className="flex items-center gap-2">
            { social.map(({ href, icon }, index) => {
              return (
                <SocialMediaIconButton
                  key={index}
                  href={href} 
                  icon={icon}
                  variant="outlineDim"
                  size="small-icon"
                />
              )
            })}
          </div>
        </div>
      </aside>
    </div>
  );
};
