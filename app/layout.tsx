import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'

export const metadata: Metadata = {
  title: 'Soulfuel Green Energy - Empowering Rural Communities',
  description: 'Creating economic opportunities while protecting the environment through direct farmer partnerships. Transforming agricultural waste into clean energy solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
