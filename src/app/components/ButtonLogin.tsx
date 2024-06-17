'use client'

import Image from 'next/image'

export default function ButtonLogin() {
  return (
    <button className="flex items-center gap-3 text-gray-200 mt-auto">
      Fazer login <Image src="/login.png" alt="" width={24} height={24} />
    </button>
  )
}
