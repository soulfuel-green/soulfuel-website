import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
