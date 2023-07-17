import { IContact } from "@/@types/contact";
import { EnvelopeSimple, MapPin, Phone, WhatsappLogo } from "@/assets/phosphor";
import Link from "next/link";
import { general } from "./general";

const { address, email, landlines, whatsappPhone, whatsappApi } = general;

// TODO Generate key for each value dynamically.
// TODO Add Link title to Generic Helper to reduce code repetition.

export const contact: IContact[] = [
  {
    icon: <MapPin size={18} className="shrink-0 group-hover:text-amber-700"/>,
    values: [ 
      <Link className="p-2 rounded-md hover:bg-amber-700/10 transition-all" target="_blank" key="address-0" href="https://goo.gl/maps/iREWq98tqFXNHxVR7" title="Endereço físico da clínica">{ address }</Link>,
    ],
  },
  {
    icon: <EnvelopeSimple size={18} className="shrink-0"/>,
    values: [
      <Link className="p-2 rounded-md hover:bg-amber-700/10 transition-all break-all" key="mail-0" href={`mailto:${email}`} title="Endereço de e-mail da clínica">{ email }</Link>,
    ],
  },
  {
    icon: <Phone size={18} className="shrink-0"/>,
    values: [
      <Link className="p-2 rounded-md hover:bg-amber-700/10 transition-all" key="landline-0" href={`tel:${landlines[0]}`} title="Número do telefone fixo clínica">{ landlines[0] }</Link>,
      <Link className="p-2 rounded-md hover:bg-amber-700/10 transition-all" key="landline-1" href={`tel:${landlines[1]}`} title="Número do telefone fixo clínica">{ landlines[1] }</Link>,
    ],
  },
  {
    icon: <WhatsappLogo size={18} className="shrink-0"/>,
    values: [
      <Link className="p-2 rounded-md hover:bg-amber-700/10 transition-all" target="_blank" key="whatsapp-0" href={whatsappApi} title="Número do whatsapp da clínica">{ whatsappPhone }</Link>,
    ],
  }
];