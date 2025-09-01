import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

export const metadata: Metadata = {
  title: 'Bajaj Finserv',
  description: 'Bajaj Finance Limited - Loans, Investment, Insurance, Payments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} font-rubik`}>
        {children}
      </body>
    </html>
  )
}