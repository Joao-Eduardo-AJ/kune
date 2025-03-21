import { GoogleTagManager } from '@next/third-parties/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import ReactLenis from 'lenis/react'
/* import type { Metadata } from 'next' */
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Outfit } from 'next/font/google'

import { Footer } from '@/components'

import '../globals.css'
import '../../../public/icons/symbols.css'

const outfit = Outfit({
  display: 'swap',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-outfit'
})

export async function generateMetadata() {
  return {
    title: 'Kune Studio',
    description: 'Turn ideas into growth-driven solutions'
  }
}

/* export const metadata: Metadata = {
  title: 'Kune Studio',
  description: 'Turn ideas into growth-driven solutions',
  keywords: [
    'Kune Studio',
    'Desenvolvimento de Software',
    'UI/UX Design',
    'Aplicações Web',
    'Startups',
    'Tecnologia',
    'Growth'
  ],
  authors: [{ name: 'Kune Studio', url: 'https://kunestudio.com' }],
  openGraph: {
    title: 'Kune Studio',
    description: 'Turn ideas into growth-driven solutions',
    url: 'https://kunestudio.com',
    siteName: 'Kune Studio',
    images: [
      {
        url: 'https://kunestudio.com/og-image.jpg', // Substituir pela URL real
        width: 1200,
        height: 630,
        alt: 'Kune Studio - Desenvolvimento de Software e UI/UX Design'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kunestudio', // Substituir pelo handle real do Twitter
    title: 'Kune Studio',
    description: 'Turn ideas into growth-driven solutions',
    images: ['https://kunestudio.com/twitter-image.jpg'] // Substituir pela URL real
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
} */

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <GoogleTagManager gtmId="GT-MBGCK87P" />
      <body className={`${outfit.variable} font-outfit antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ReactLenis root>
            {children}
            <Footer />
          </ReactLenis>
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
