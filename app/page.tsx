'use client'
import Navbar from './components/NavBar'
import Footer from './components/Footer';
import InfiniteScrollText from './components/InfiniteScroll';
import Image from 'next/image';
import img from './assets/wedding-hands.jpg'
import AstrologyService from './components/AstrologyService';
import img2 from './assets/Miami-Beach-Indian-wedding.jpg'
import whatsapp from './assets/whataspp-logo.png'

import AboutSection from './components/AboutSection';
import FloatingWhatsApp from './components/FloatingWhatsapp';
import IntroSection from './components/IntroSection'
import Reviews from './components/Reviews';
import Services from './components/Services';
import OptInForm from './components/OptInForm';
export default function Home() {
  return (
    <>
      <Navbar />
      <InfiniteScrollText />
      <IntroSection />

      <TwoImages />
      <AboutSection />
      <Services />
      <AstrologyService />
      {Contact()}
      <Reviews />
      <FloatingWhatsApp number='+92 300 0051248' />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <OptInForm />
      </div>
      <Footer />
    </>
  );
}



function Contact() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-8 rounded-lg shadow-md">
        <div className="flex items-center space-x-4 mb-8 sm:mb-0">
          <div className="flex-shrink-0">
            {/* <Image
                src="/path-to-your-professor-logo.png" // Make sure to update this path
                alt="Professor Logo"
                width={50}
                height={50}
                className="rounded-full"
              /> */}
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Professor Syeda Sadaf Jaffrey
            </h2>
            <p className="text-md sm:text-lg text-gray-600 italic">Get you problem solved</p>
          </div>
        </div>
        <div className="flex items-center justify-center animate-bounce">
          <Image
            src={whatsapp}
            alt="WhatsApp Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-orange-400 p-2 rounded-full text-nowrap shadow-md">
            +92 300 0051248
          </span>
        </div>
      </div>
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

