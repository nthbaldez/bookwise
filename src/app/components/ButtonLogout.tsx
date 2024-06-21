'use client'

import { signOut } from 'next-auth/react'
import Image from 'next/image'

interface UserSessionProps {
  name?: string | null | undefined
  email?: string | null | undefined
  image?: string | null | undefined
}

export default function ButtonLogout(user: UserSessionProps) {
  return (
    <button
      className="flex items-center gap-3 text-gray-200 mt-auto hover:cursor-pointer hover:opacity-70"
      onClick={() =>
        signOut({
          callbackUrl: '/',
        })
      }
    >
      {user.name} <Image src="/login.png" alt="" width={24} height={24} />
    </button>
  )
}
