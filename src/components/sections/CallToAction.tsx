"use client";

import { callToAction } from "@/helpers/callToAction";
import { Section } from 'react-scroll-section';
import { CallToActionBanner } from "../primitives/CallToActionBanner";

interface CallToActionSectionProps {};

export function CallToActionSection({}: CallToActionSectionProps) {
  return (
    <Section id="cta" className="wrapper mt-24">
      <CallToActionBanner {...callToAction}/>
    </Section>
  );
};
