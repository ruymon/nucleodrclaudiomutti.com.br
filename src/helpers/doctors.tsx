import { IDoctor } from "@/@types/doctors";
import { FacebookLogo, InstagramLogo } from "@/assets/Icons";

export const doctors: IDoctor[] = [
  {
    name: "Dr. Claudio Mutti",
    registration: "CRM 59687/SP",
    specialty: ["Nutrologia"],
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: "/doctor-claudio.jpeg",
    social: [
      {
        href: "#",
        icon: <FacebookLogo size={24} />
      },
      {
        href: "#",
        icon: <InstagramLogo size={24} />
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
        href: "#",
        icon: <FacebookLogo size={24} />
      },
      {
        href: "#",
        icon: <InstagramLogo size={24} />
      }
    ]
  }
];