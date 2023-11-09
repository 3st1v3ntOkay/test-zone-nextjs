import type { Metadata, Viewport } from 'next'
import { inter } from './fonts'

export const metadata: Metadata = {
  title: 'Home page',
  description: 'This is a home page',
  manifest: './manifest.ts',
  icons: {
    icon: '/favicon.ico'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'only light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
