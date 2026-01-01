import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jia Kesaria | Data Analyst & Software Engineer',
  description: 'Computer Science + Data Science student at UW-Madison. Seeking Data Analyst, Data Engineering, and Software Engineering internships.',
  keywords: ['Jia Kesaria', 'Data Analyst', 'Software Engineer', 'UW-Madison', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

