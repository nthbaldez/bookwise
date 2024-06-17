'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import ButtonLogin from './ButtonLogin'

enum Pages {
  'home' = '/home',
  'explore' = '/explore',
}

export default function AsideComponent() {
  const page = usePathname()

  return (
    <aside className="m-5 bg-gray-700 w-[232px] flex flex-col gap-16 items-center rounded-md pb-7">
      <Image
        src="/logo.png"
        alt=""
        width={128}
        height={32}
        className="mt-[40px]"
      />

      <ul className="text-gray-100 flex flex-col gap-4 w-full">
        <li className="flex items-center gap-2 m-auto">
          {page === Pages.home && (
            <span className="w-[4px] h-[24px] bg-purple-100 rounded-full"></span>
          )}
          <Image src="/icon-inicio.png" alt="" width={24} height={24} />
          <Link
            href="/home"
            className={twMerge(
              page === Pages.home ? 'text-white' : 'text-gray-400',
            )}
          >
            Início
          </Link>
        </li>
        <li className="flex items-center gap-2 m-auto">
          {page === Pages.explore && (
            <span className="w-[4px] h-[24px] bg-purple-100 rounded-full"></span>
          )}
          <Image src="/icon-explorar.png" alt="" width={24} height={24} />
          <Link
            href="/explore"
            className={twMerge(
              page === Pages.explore ? 'text-white' : 'text-gray-400',
            )}
          >
            Explorar
          </Link>
        </li>
      </ul>

      <ButtonLogin />
    </aside>
  )
}
