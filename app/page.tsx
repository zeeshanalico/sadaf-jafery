'use client'
import Navbar from './components/NavBar'
import Footer from './components/Footer';
import InfiniteScrollText from './components/InfiniteScroll';
import Image from 'next/image';
import img from './assets/wedding-hands.jpg'
import AstrologyService from './components/AstrologyService';
import img2 from './assets/Miami-Beach-Indian-wedding.jpg'
import Contact from './components/Contact';
import AboutSection from './components/AboutSection';
import FloatingWhatsApp from './components/FloatingWhatsapp';
import IntroSection from './components/IntroSection'
import Reviews from './components/Reviews';
import Services from './components/Services';
import IstikharaServices from './components/IstikharaServices'

export default function Home() {
  return (
    <>
      <Navbar />
      <InfiniteScrollText />
      <IntroSection />
      <Contact />
      {/* <TwoImages /> */}
      <Services />
      <AstrologyService />
      <Reviews />
      <AboutSection />
      {/* <R/> */}
      <FloatingWhatsApp number='+92 300 0051248' />
      <IstikharaServices/>
     
      <Footer />
    </>
  );
}


function TwoImages() {
  return <div className='flex flex-row flex-wrap'>
    <div className="w-full box-border lg:w-1/2 p-1">
      <Image
        src={img}
        alt="Left Side Image"
        width={700}
        height={700}
        className="object-cover w-full" />
    </div>
    <div className="w-full lg:w-1/2 p-1 hidden sm:block">
      <Image
        src={img2}
        alt="Right Side Image"
        width={700}
        height={700}
        className="object-cover w-full" />
    </div>
  </div>;
}


