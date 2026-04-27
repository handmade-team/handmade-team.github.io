import Header from '@/components/Header';
import HomeSection from '@/components/Home';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Crew from '@/components/Crew';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <About />
        <Portfolio />
        <Crew />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
