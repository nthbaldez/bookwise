import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'bookwise | início',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="flex h-screen">{children}</div>
}
