import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import AsideComponent from './AsideComponent'

export default async function Sidebar() {
  const session = await getServerSession()

  if (!session) {
    return redirect('/')
  }

  return <AsideComponent />
}
