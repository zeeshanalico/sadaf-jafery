// components/AstrologyService.js
import Image from 'next/image';
import img from '../assets/Miami-Beach-Indian-wedding.jpg'


const AstrologyService = () => {
  return (
    // <div className="lg:w-4/6 max-w-xl mx-auto lg:max-w-none flex flex-col justify-center">
      <div className="bg-red-600 relative isolate overflow-hidden">
        <div className="px-6 sm:px-6 py-16 sm:py-24 lg:px-8">
          <div className="text-center mx-auto max-w-2xl">
            <h2 className="text-gray-100 text-3xl font-bold tracking-tight sm:text-4xl">
              ماہر علم نجوم کی رہنمائی کے لیے ہم سے رابطہ کریں۔
            </h2>
            <p className="text-gray-300 mx-auto mt-6 max-w-xl text-lg leading-8">
              Need help  Love marriage solutions , Black magic removal 100% with Tarot, Numerology, or Astrology? Don't hesitate to contact us. Our expert astrologers are here to guide you.
            </p>
            <div className="justify-center mt-10 flex items-center gap-x-6">
              <a href="tel:03000051248" className="rounded-md bg-purple-700 px-3.5 py-2.5 text-sm font-semibold shadow-sm text-white">
                0300-0051248
              </a>
            </div>
          </div>
        </div>
      </div>

    // </div>
  );
};

export default AstrologyService;