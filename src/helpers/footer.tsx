import { ISocial } from "@/@types/generic";
import { FacebookLogo, InstagramLogo, YoutubeLogo } from "@/assets/Icons";
import { CURRENT_YEAR } from "@/constants/date";

export const footerCopyright = {
  copyright: `\u00A9 ${CURRENT_YEAR} - Núcleo Dr. Claudio Mutti`,
  representative: "Responsável Técnico: Dr. Claudio Mutti - CRM 59687/SP",
  rights: "Todos os direitos reservados.",
  slogan: ["Saúde", "Qualidade de vida", "Estética", "Tratamento capilar"]
}

export const footerSocials: ISocial[] = [
  {
    href: 'https://www.youtube.com/@drclaudiomutti2461?sub_confirmation=1',
    icon: <YoutubeLogo size={24} />,
  },
  {
    href: "https://www.instagram.com/nucleodrclaudiomutti/",
    icon: <InstagramLogo size={24} />,
  },
  {
    href: 'https://www.facebook.com/people/Dr-Claudio-Mutti/100075382197585/',
    icon: <FacebookLogo size={24} />,
  }
];
