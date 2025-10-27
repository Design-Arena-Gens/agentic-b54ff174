import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PaySure - Trusted B2B Payments + Smart Accounting',
  description: 'Complete B2B payment protection with integrated accounting, payment guarantee, and legal escalation',
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
