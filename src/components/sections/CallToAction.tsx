import { callToAction } from "@/helpers/callToAction";
import { CallToActionBanner } from "../compositions/cta/CallToActionBanner";

interface CallToActionSectionProps {};

export function CallToActionSection({}: CallToActionSectionProps) {
  return (
    <section id="cta" className="wrapper mt-24">
      <CallToActionBanner {...callToAction}/>
    </section>
  );
};
