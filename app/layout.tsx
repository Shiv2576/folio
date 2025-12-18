// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { Inter_Tight } from 'next/font/google'
import FloatingWords from '@/components/ui/background'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://shiv2576.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Shivang Dixit',
    template: '',
  },
  description: '',
  icons: {
    icon: '/globe.png',
    shortcut: '/globe.png',
    apple: '/globe.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={interTight.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-zinc-950">
        {/* Background iframe */}

        {/* Theme provider and content */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingWords />
          <div className="relative z-10">
            <div className="mx-auto max-w-screen-sm px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
