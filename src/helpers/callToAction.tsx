import { ICallToActionItem } from "@/@types/callToAction";
import { CallToActionButton } from "@/components/compositions/cta/CallToActionButton";

export const callToAction: ICallToActionItem = {
  hat: "VAMOS LÁ",
  title: "Comece a cuidar de sua saúde agora mesmo!",
  description: "Estamos aqui para ajudar você a trilhar o caminho rumo a uma vida mais saudável e plena!",
  slot: <CallToActionButton />
}