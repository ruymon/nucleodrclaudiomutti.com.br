import { ICallToActionItem } from "@/@types/callToAction";
import { ScheduleAppointmentButton } from "@/components/compositions/ScheduleAppointmentButton";

export const callToAction: ICallToActionItem = {
  hat: "VAMOS LÁ",
  title: "Comece a cuidar de sua saúde agora mesmo!",
  description: "Estamos aqui para ajudar você a trilhar o caminho rumo a uma vida mais saudável e plena!",
  slot: <ScheduleAppointmentButton size="lg" className="w-full lg:w-fit" hasWhatsappIcon />
}