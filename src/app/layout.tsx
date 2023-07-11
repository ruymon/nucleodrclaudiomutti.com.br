import { Footer } from '@/components/primitives/Footer';
import { Navbar } from '@/components/primitives/Navbar';
import { DM_Sans, Kalam } from 'next/font/google';
import { ReactNode } from 'react';
import { Provider as WrapBalancerProvider } from 'react-wrap-balancer'
import './globals.css';

const dmSansFont = DM_Sans({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const kalamFont = Kalam({ 
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kalam',
});

export const metadata = {
  title: 'Núcleo Dr Claudio Mutti - Clínica de Saúde em São Paulo | Bem-Estar e Longevidade',
  description: 'Descubra uma abordagem personalizada para o bem-estar e longevidade na Núcleo Dr Claudio Mutti. Especialistas em emagrecimento, hipertrofia, reposição hormonal e muito mais. Cuide da sua aparência sem comprometer a saúde. Agende sua consulta hoje mesmo!',

}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang='pt-BR' className={`${dmSansFont.variable} ${kalamFont.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#B45309" />
      </head>
      
      <body>
        <Navbar />
        <WrapBalancerProvider>
          {children}
        </WrapBalancerProvider>
        <Footer />
      </body>
    </html>
  )
}
