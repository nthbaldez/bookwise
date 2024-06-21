import { getServerSession } from 'next-auth'
import AsideComponent from '../components/AsideComponent'
import ButtonLogout from '../components/ButtonLogout'
import ButtonLogin from '../components/ButtonLogin'

export default async function AsideSessionProvider() {
  const session = await getServerSession()

  if (!session) {
    return (
      <div className="flex flex-col gap-16 items-center rounded-md  m-5 bg-gray-700 w-[232px] pb-7">
        <AsideComponent />
        <ButtonLogin />
      </div>
    )
  }

  const { user } = session
  return (
    <div className="flex flex-col gap-16 items-center rounded-md  m-5 bg-gray-700 w-[232px] pb-7">
      <AsideComponent />
      <ButtonLogout {...user} />
    </div>
  )
}
