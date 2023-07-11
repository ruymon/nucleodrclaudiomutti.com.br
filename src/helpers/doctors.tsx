import { IDoctor } from "@/@types/doctors";
import { FacebookLogo, InstagramLogo, YoutubeLogo } from "@/assets/Icons";

export const doctors: IDoctor[] = [
  {
    name: "Dr. Claudio Mutti",
    registration: "CRM 59687/SP",
    specialty: ["Nutrologia"],
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: "/doctor-claudio.jpeg",
    social: [
      {
        href: "https://www.facebook.com/claudio.mutti.967",
        icon: <FacebookLogo size={24} />
      },
      {
        href: "https://www.instagram.com/drclaudiomutti/",
        icon: <InstagramLogo size={24} />
      },
      {
        href: "https://www.youtube.com/@drclaudiomutti2461?sub_confirmation=1",
        icon: <YoutubeLogo size={24} />
      }
    ]
  },
  {
    name: "Dr. Marcelo Lima",
    registration: "CRM 206295/SP",
    specialty: ["Obesidade", "Sarcopenia"],
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: "/doctor-marcelo.jpeg",
    social: [
      {
        href: "https://www.instagram.com/drmarcelo.lima/",
        icon: <InstagramLogo size={24} />
      }
    ]
  }
];