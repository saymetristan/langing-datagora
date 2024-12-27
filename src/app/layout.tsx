import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Space_Grotesk } from 'next/font/google'
import Footer from '../components/sections/Footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://datagora.mx'),
  title: {
    default: 'Datagora | Transformando el presente con IA',
    template: '%s | Datagora'
  },
  description: 'Transformamos empresas y usuarios con soluciones de Inteligencia Artificial. Automatización, eficiencia y crecimiento con tecnología de vanguardia.',
  keywords: ['inteligencia artificial', 'IA', 'automatización', 'machine learning', 'empresas', 'tecnología', 'innovación'],
  authors: [{ name: 'Jorge Tristan' }],
  creator: 'Datagora',
  publisher: 'Datagora',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://datagora.mx',
    title: 'Datagora | Soluciones de IA para Empresas y Usuarios',
    description: 'Transformamos empresas y usuarios con soluciones de Inteligencia Artificial.',
    siteName: 'Datagora',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Datagora - Soluciones de IA'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Datagora | Soluciones de IA para Empresas y Usuarios',
    description: 'Transformamos empresas y usuarios con soluciones de Inteligencia Artificial.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' }
    ],
    other: [
      {
        rel: 'manifest',
        url: '/manifest.json'
      }
    ]
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'tu-codigo-de-verificacion',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
