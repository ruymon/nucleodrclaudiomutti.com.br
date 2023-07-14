import { IContact } from "@/@types/contact";
import { EnvelopeSimple, MapPin, Phone, WhatsappLogo } from "@/assets/phosphor";
import Link from "next/link";
import { general } from "./general";

const { address, email, landlines, whatsappPhone, whatsappApi } = general;

// TODO Generate key for each value dynamically.
// TODO Add Link title to Generic Helper to reduce code repetition.
// TODO Add link that opens a Maps app on Clinics Address.

export const contact: IContact[] = [
  {
    icon: <MapPin size={18} className="shrink-0"/>,
    values: [ 
      <Link target="_blank" key="address-0" href="geo:37.786971,-122.399677" title="Endereço físico da clínica">{ address }</Link>,
    ],
  },
  {
    icon: <EnvelopeSimple size={18} className="shrink-0"/>,
    values: [
      <Link target="_blank" key="mail-0" className="break-all" href={`mailto:${email}`} title="Endereço de e-mail da clínica">{ email }</Link>,
    ],
  },
  {
    icon: <Phone size={18} className="shrink-0"/>,
    values: [
      <Link target="_blank" key="landline-0" href={`tel:${landlines[0]}`} title="Número do telefone fixo clínica">{ landlines[0] }</Link>,
      <Link target="_blank" key="landline-1" href={`tel:${landlines[1]}`} title="Número do telefone fixo clínica">{ landlines[1] }</Link>,
    ],
  },
  {
    icon: <WhatsappLogo size={18} className="shrink-0"/>,
    values: [
      <Link target="_blank" key="whatsapp-0" href={whatsappApi} title="Número do whatsapp da clínica">{ whatsappPhone }</Link>,
    ],
  }
];