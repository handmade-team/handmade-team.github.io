import Header from '@/components/Header'
import HomeSection from '@/components/Home'
import About from '@/components/About'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <About />
        {/* 섹션 추가 예정 */}
      </main>
    </>
  )
}
