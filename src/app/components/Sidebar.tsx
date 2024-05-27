import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Sidebar() {
  const session = await getServerSession()

  if (!session) {
    return redirect('/')
  }
  return (
    <aside className="h-full m-5 bg-gradient-vertical">
      <h2 className="text-white text-2xl">{session.user?.name}</h2>
    </aside>
  )
}
