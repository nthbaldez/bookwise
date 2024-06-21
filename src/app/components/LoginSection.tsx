'use client'

import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
export default function LoginSection() {
  const router = useRouter()

  return (
    <section className="h-full flex-1 flex items-center">
      <div className="flex flex-col gap-10 mx-auto w-[372px]">
        <div>
          <h1 className="text-lg text-gray-100">Boas vindas</h1>
          <p className="text-md text-gray-200">
            Faça seu login ou acesse como visitante.
          </p>
        </div>

        <div className="flex flex-col w-full space-y-4">
          <button
            className="w-full px-6 py-5 bg-gray-600 flex flex-row items-center gap-4 cursor-pointer rounded-md text-gray-200 hover:opacity-75"
            onClick={() =>
              signIn('google', {
                callbackUrl: '/home',
              })
            }
          >
            <Image src="/logos_google-icon.png" width={32} height={32} alt="" />
            Entrar com Google
          </button>
          <button
            className="w-full px-6 py-5 bg-gray-600 flex flex-row items-center gap-4 cursor-pointer rounded-md text-gray-200 hover:opacity-75"
            onClick={() =>
              signIn('github', {
                callbackUrl: '/home',
              })
            }
          >
            <Image
              src="/akar-icons_github-fill.png"
              width={32}
              height={32}
              alt=""
            />
            Entrar com GitHub
          </button>
          <button
            className="w-full px-6 py-5 bg-gray-600 flex flex-row items-center gap-4 cursor-pointer rounded-md text-gray-200 hover:opacity-75"
            onClick={() => router.push('/home')}
          >
            <Image src="/RocketLaunch.png" width={32} height={32} alt="" />
            Acessar como visitante
          </button>
        </div>
      </div>
    </section>
  )
}
