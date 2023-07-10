import { ISocial } from "@/@types/generic";
import { FacebookLogo, InstagramLogo, YoutubeLogo } from "@/assets/Icons";

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
