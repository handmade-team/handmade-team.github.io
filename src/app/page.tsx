import Header from '@/components/Header'
import HomeSection from '@/components/Home'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Crew from '@/components/Crew'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <About />
        <Portfolio />
        <Crew />
        {/* 섹션 추가 예정 */}
      </main>
    </>
  )
}
