import type { Metadata } from 'next'
import Sidebar from '../components/Sidebar'

export const metadata: Metadata = {
  title: 'bookwise | explorar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      {children}
    </div>
  )
}
