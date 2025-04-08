import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ToastProvider from '@/providers/ToastProvider'

// Load Inter font
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Neel Patel Portfolio',
  description: 'A personal portfolio website showcasing my projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} scroll-smooth`}>
      <body className={`${inter.className} bg-light dark:bg-dark-bg text-dark dark:text-dark-text transition-colors duration-300`}>
        {children}
        <ToastProvider />
      </body>
    </html>
  )
} 