import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Siddhesh Kulkarni — Computer Science Student & Developer',
  description:
    'Portfolio of Siddhesh Kulkarni — Computer Science student, developer, and AI/ML enthusiast. Building practical software and turning ideas into useful products.',
  generator: 'v0.app',
  openGraph: {
    title: 'Siddhesh Kulkarni — Computer Science Student & Developer',
    description:
      'Building practical software, exploring AI/ML, and turning ideas into useful products.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
