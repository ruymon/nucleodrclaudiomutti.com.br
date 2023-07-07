import { ICallToActionItem } from "@/@types/callToAction";
import { WhatsappLogo } from "@/assets/Icons";
import { Button } from "@/components/primitives/Button";

function CallToActionButton() {
  return (
    <Button size="lg" className="w-full lg:w-fit" >
      <WhatsappLogo size={20} />
      AGENDE SUA CONSULTA
    </Button>
  )
};

export const callToAction: ICallToActionItem = {
  hat: "VAMOS LÁ 🩺",
  title: "Comece a cuidar de sua saúde agora mesmo!",
  description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  slot: <CallToActionButton />
}