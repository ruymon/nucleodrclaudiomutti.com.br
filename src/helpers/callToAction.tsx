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
  description: "Estamos aqui para ajudar você a trilhar o caminho rumo a uma vida mais saudável e plena. Agende uma consulta no Núcleo Dr. Claudio Mutti e juntos alcançaremos seus objetivos de saúde. Mal podemos esperar para recebê-lo e começar essa jornada ao seu lado!",
  slot: <CallToActionButton />
}