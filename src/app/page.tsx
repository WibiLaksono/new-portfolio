import Hero from '@/app/components/hero';
import Experience from '@/app/components/experience';
import Projects from '@/app/components/projects';
import Footer from '@/app/components/footer';

export default function Home() {
  return (
    <main className='min-h-screen font-sans antialiased max-w-[70rem] mx-auto pt-10 sm:pt-20 sm:pb-10 px-6' >
    <Hero/>
    <Experience/>
    <Projects/>
    <Footer/>
    </main>
  );
}
