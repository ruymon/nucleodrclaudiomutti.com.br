import { callToAction } from "@/helpers/callToAction";
import { CallToActionBanner } from "../primitives/CallToActionBanner";

interface CallToActionSectionProps {};

export function CallToActionSection({}: CallToActionSectionProps) {
  return (
    <section className="wrapper">
      <CallToActionBanner {...callToAction}/>
    </section>
  );
};
