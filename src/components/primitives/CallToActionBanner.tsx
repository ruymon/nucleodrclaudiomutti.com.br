import { type ICallToActionItem } from "@/@types/callToAction";
import stethoscopeEmoji from "@/assets/emojis/stethoscope-emoji.png";
import Image from "next/image";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

type CallToActionBannerProps = ICallToActionItem;

export function CallToActionBanner({ hat, title, description, slot }: CallToActionBannerProps) {
  return (
    <div className="w-full flex flex-col text-center items-center gap-8 lg:text-left lg:items-start lg:gap-6 rounded-xl py-8 px-6 bg-amber-700/[2%] border border-amber-700/10">
      <div className="flex flex-col gap-2  lg:gap-1">
        <Paragraph variant="hat" accentColor="brand-light" className="flex items-center gap-2 justify-center lg:justify-start">
          <Image width={16} height={16} src={stethoscopeEmoji} alt="Emoji de estetoscópio"/>
          {hat}
        </Paragraph>

        <Heading as="h2" fontWeight="extrabold" accentColor="brand">{title}</Heading>
        <Paragraph size="large" accentColor="brand">{description}</Paragraph>
      </div>

      {slot}
    </div>
  );
};
