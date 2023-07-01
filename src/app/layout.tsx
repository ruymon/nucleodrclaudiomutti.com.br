import { DM_Sans, Kalam } from 'next/font/google';
import { ReactNode } from 'react';
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
  title: 'Núcleo Dr Claudio Mutti',
  description: 'Clínica em São Paulo especializada em proporcionar bem-estar e longevidade de forma personalizada e humanizada.',
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
      
      <body className='min-h-screen w-full font-sans'>{children}</body>
    </html>
  )
}
