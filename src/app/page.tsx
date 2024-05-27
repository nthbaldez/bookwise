import Image from 'next/image'
import LoginSection from './components/LoginSection'
export default function Home() {
  return (
    <main className="h-full w-full flex flex-row items-center text-white">
      <section className="h-auto text-white m-5">
        <Image
          src="/hero.png"
          width={598}
          height={300}
          alt=""
          className="max-h-full"
        />
      </section>

      <LoginSection />
    </main>
  )
}
