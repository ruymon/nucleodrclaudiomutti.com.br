import { IDoctor } from "@/@types/doctors";
import { FacebookLogo, InstagramLogo, YoutubeLogo } from "@/assets/Icons";

export const doctors: IDoctor[] = [
  {
    name: "Dr. Claudio Mutti",
    registration: "CRM 59687/SP",
    specialty: ["Nutrologia"],
    description: "Olá! Sou o Dr. Claudio Mutti, médico formado pela UNIVAS com mais de três décadas de experiência na área da saúde. Após meus vários anos de atendimentos, decidi fundar o meu próprio núcleo, com um único objetivo: Ajudar você a se sentir bem, com longevidade e bem-estar estético. Para isso, desenvolvi uma metodologia personalizada e centrada no paciente para potencializar seus resultados, atendendo sempre com excelência! Por fim, não deixe de me acompanhar nas minhas redes sociais! Diariamente compartilho dicas para te ajudar a harmonizar uma alimentação saudável e a adoção de bons hábitos.",
    image: "/images/doctors/doctor-claudio.jpeg",
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
    description: "Olá! Sou o Dr. Marcelo Lima, médico formado pela Universidade Nove de Julho, com anos de experiência em diversas áreas da medicina. Meu foco é ajudar meus pacientes a alcançarem uma vida saudável e equilibrada. Como especialista em emagrecimento e longevidade, busquei aprimorar meus conhecimentos nas áreas de bem-estar e medicina integrativa, esportiva, modulação hormonal e hipertrofia. Estou sempre atualizado com as tendências mais modernas da medicina para oferecer os melhores cuidados aos meus pacientes. Além do meu trabalho clínico, compartilho regularmente dicas e orientações valiosas em minhas redes sociais, fique por dentro.",
    image: "/images/doctors/doctor-marcelo.jpeg",
    social: [
      {
        href: "https://www.instagram.com/drmarcelo.lima/",
        icon: <InstagramLogo size={24} />
      }
    ]
  }
];