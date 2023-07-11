import { ISocial } from "@/@types/generic";
import { FacebookLogo, InstagramLogo, YoutubeLogo } from "@/assets/Icons";
import { CURRENT_YEAR } from "@/constants/date";

export const footerCopyright = {
  copyright: `&copy; ${CURRENT_YEAR} - Núcleo Dr. Claudio Mutti`,
  representative: "Responsável Técnico: Dr. Claudio Mutti - CRM 59687/SP",
  rights: "Todos os direitos reservados."
}

export const footerSocials: ISocial[] = [
  {
    href: 'https://www.youtube.com/user/academiaivaobr',
    icon: <YoutubeLogo size={24} />,
  },
  {
    href: 'https://www.instagram.com/ivao_br',
    icon: <InstagramLogo size={24} />,
  },
  {
    href: 'https://www.facebook.com/IVAOBR',
    icon: <FacebookLogo size={24} />,
  }
];
