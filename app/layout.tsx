import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amine Boussaid | Full Stack Developer',
  description: 'Amine Boussaid Portfolio - Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth" style={{ backgroundColor: '#000000' }}>
      <body className={`${inter.className} overflow-x-hidden w-full bg-black text-white`} style={{ backgroundColor: '#000000', color: '#ffffff' }}>
            {children}
      </body>
    </html>
  )
}
