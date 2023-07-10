import { EnvelopeSimple, MapPin, Phone } from "@/assets/Icons";
import { general } from "./general";

export const contact = [
  {
    label: "Endereço",
    value: general.address,
    icon: <MapPin size={18}/>
  },
  {
    label: "E-mail",
    value: general.email,
    icon: <EnvelopeSimple size={18}/>
  },
  {
    label: "Telefone",
    value: general.phone,
    icon: <Phone size={18}/>
  }
];