'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'

export default function ButtonLogin() {
  return (
    <button
      className="flex items-center gap-3 text-gray-200 mt-auto hover:cursor-pointer hover:opacity-70"
      onClick={() =>
        signIn('google', {
          callbackUrl: '/home',
        })
      }
    >
      Fazer Login <Image src="/login.png" alt="" width={24} height={24} />
    </button>
  )
}
