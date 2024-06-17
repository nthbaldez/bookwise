import Image from 'next/image'
import LoginSection from './components/LoginSection'
export default function Home() {
  return (
    <main className="h-screen w-full flex flex-row items-center text-white">
      <section className="h-full text-white m-5">
        <Image
          src="/hero.png"
          width={598}
          height={920}
          alt=""
          className="h-full object-cover"
        />
      </section>

      <LoginSection />
    </main>
  )
}
