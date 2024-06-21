import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import AsideSessionProvider from '../contexts/AsideSessionProvider'

export default async function Sidebar() {
  const session = await getServerSession()

  if (!session) {
    return redirect('/')
  }

  return <AsideSessionProvider />
}
