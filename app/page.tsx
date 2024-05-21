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

      <Contact />
      <TwoImages />
      <Services />
      <AstrologyService />
      <Reviews />
      <AboutSection />
      <FloatingWhatsApp number='+92 300 0051248' />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <OptInForm />
      </div>
      <Footer />
    </>
  );
}



const Contact = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center p-8 bg-gray-50 ">
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
          <div className='bg-gray-50'>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              <div className="flex items-center justify-center ">
                <Image
                  src={whatsapp}
                  alt="WhatsApp Logo"
                  width={70}
                  height={70}
                  className="mr-2"
                />
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white bg-purple-600 p-2 rounded-full text-nowrap shadow-md animate-bounce">
                  +92 300 1712141
                </span>

              </div>
              <p className="text-md sm:text-lg text-gray-600 italic">Get you problem solved</p>
            </h2>
          </div>
        </div>
            <div className='text-4xl urdu mr-10'>پروفیسر عامل سیدہ صدف جعفری</div>

      </div>
      <div className='text-2xl urdu px-12 text-end leading-loose pb-7 bg-gray-50'>
        علم ایک حقیقت ہے اگر کرنے والا سچا عامل ہو تو . اگر آپ کسی بھی مسلے کا شکار ہیں جیسے من پسند شادی ، والدین کو راضی کرنا ، محبّت میں ناکامی ، شوہر کو راہ راست پر لانا ، شوہر کو ناجائز کاموں سے روکنا ، طلاق کا مسلہ ، تعویذات کی کاٹ ، کالا جادو کا توڑ ، کالا علم کی رکاوٹ ، پسند کا رشتہ ، گھریلو لڑائی جھگڑا ، اولاد کا مسلہ یا جھگڑنا ، محبّت میں ناکامی ، شوہر کو راہ راست پر لانا ، شوہر کو ناجائز کاموں سے روکنا ، طلاق کا مسلہ ، تعویذات کی کاٹ ، کالا جادو کا توڑ ، کالا علم کی رکاوٹ ، پسند کا رشتہ ، گھریلو لڑائی جھگڑا ، اولاد کا مسلہ یا کسی بھی طرح کے مسائل کا شکار ہیں تو فوری پروفیسر عامل سیدہ صدف جعفری سے رابطہ کریں اور ان مسائل کا حل کروائیں ۔
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

