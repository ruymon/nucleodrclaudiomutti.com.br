import { WhatsappLogo } from "@/assets/phosphor";
import { Button } from "@/components/primitives/Button";

export function CallToActionButton() {
  return (
    // TODO Add functionality to open Whatsapp chat.
    <Button size="lg" className="w-full lg:w-fit" >
      <WhatsappLogo size={20} />
      AGENDE SUA CONSULTA
    </Button>
  )
};