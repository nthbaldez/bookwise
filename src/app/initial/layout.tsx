import type { Metadata } from 'next'
import Sidebar from '../components/Sidebar'

export const metadata: Metadata = {
  title: 'ignite | home',
  description: 'SUa página principal no Bookwise',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section>
      <Sidebar />
      {children}
    </section>
  )
}
