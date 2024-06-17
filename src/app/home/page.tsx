import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="mt-5 flex flex-col gap-16 rounded-md w-[1280px] mx-[96px]">
      <div className="flex items-center gap-2 mt-[40px]">
        <Image src="/icon-blue.png" alt="" width={32} height={32} />
        <h1 className="text-lg text-gray-100">Início</h1>
      </div>

      <div className="flex w-full gap-16">
        <section className="flex flex-col gap-4 w-full flex-1">
          <h3 className="text-sm text-gray-100">Avaliações mais recentes</h3>

          <div className="w-full flex flex-col gap-3">
            <div className="h-[280px] w-full p-6 rounded-lg bg-gray-700">
              <div className="h-12">
                <div className="flex gap-4">
                  <span className="rounded-full bg-gradient-vertical h-10 w-10">
                    <Image
                      src="/Avatar.png"
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </span>
                  <div className="flex flex-col text-md text-gray-100">
                    <p>Jaxson Dias</p>
                    <span className="text-gray-400">Hoje</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[280px] w-full p-6 rounded-lg bg-gray-700">
              <div className="h-12">
                <div className="flex ">
                  <span className="p-2 rounded-full bg-gradient-vertical h-10 w-10">
                    <Image
                      src="/icon-blue.png"
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="h-[280px] w-full p-6 rounded-lg bg-gray-700">
              <div className="h-12">
                <div className="flex ">
                  <span className="p-2 rounded-full bg-gradient-vertical h-10 w-10">
                    <Image
                      src="/icon-blue.png"
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="flex flex-col w-[324px]">
          <div className="flex justify-between">
            <h3 className="text-sm text-gray-100">Livros populares</h3>
            <Link
              href=""
              className="text-purple-100 text-sm flex items-center gap-2"
            >
              Ver todos
              <Image src="/arrow.png" alt="" width={16} height={16} />
            </Link>
          </div>
        </aside>
      </div>
    </main>
  )
}
