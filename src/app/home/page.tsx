import Image from 'next/image'
import Link from 'next/link'
import RatingStar from '../components/RatingStar'
import { BookApiEntity } from '@/lib/types/entities'
import { formatBooksToSideContent } from '@/utils/books-utils'

export default async function HomePage() {
  const API_URL = process.env.API_URL
  const response = await fetch(`${API_URL}/books`, {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { tags: ['BOOKS'] },
  })
  const responseJson = await response.json()
  const { books } = responseJson

  const booksToSideContent = formatBooksToSideContent(books)
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
            {books.map((book: BookApiEntity) => (
              <div
                className="h-[280px] w-full p-6 rounded-lg bg-gray-700 flex flex-col gap-8"
                key={book.id}
              >
                <div className="h-12 flex justify-between">
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

                  <div>
                    <RatingStar rating={4} />
                  </div>
                </div>

                <div className="flex gap-5">
                  <Image
                    src={book.cover_url}
                    alt=""
                    width={108}
                    height={152}
                    className="rounded-md"
                  />

                  <div className="flex flex-col gap-5 flex-1">
                    <div className="">
                      <h5 className="text-white font-semibold">{book.name}</h5>
                      <span className="text-gray-400">{book.author}</span>
                    </div>

                    <p className="text-gray-300">
                      {book.summary}...
                      <button className="text-purple-100 hover:opacity-75 cursor-pointer">
                        ver mais
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="flex flex-col w-[324px] gap-4">
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
          <div className="flex flex-col w-full gap-4">
            {booksToSideContent.map((book: BookApiEntity) => (
              <div
                key={book.id}
                className="flex gap-5 px-5 py-4 bg-gray-700 rounded-sm"
              >
                <Image
                  src={book.cover_url}
                  alt=""
                  width={64}
                  height={94}
                  className="rounded-sm"
                />

                <div className="flex justify-between flex-col">
                  <div>
                    <h5 className="text-xs text-gray-100">{book.name}</h5>
                    <p className="text-sm text-gray-400">{book.author}</p>
                  </div>
                  <div className="mt-auto">
                    <RatingStar rating={4} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </main>
  )
}
