
import type { Metadata } from 'next'
import { Inter, Crimson_Text } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const crimson = Crimson_Text({ 
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-crimson'
})

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'Yoga Studio Tipaza - Breathe. Move. Find Balance.',
  description: 'Join our yoga community in Tipaza for mindful movement and inner calm. Offering Hatha, Vinyasa, and Yin yoga classes.',
  openGraph: {
    title: 'Yoga Studio Tipaza - Breathe. Move. Find Balance.',
    description: 'Join our yoga community in Tipaza for mindful movement and inner calm.',
    images: ['/og-image.png'],
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${crimson.variable}`}>
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-white">
          {children}
        </div>
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
