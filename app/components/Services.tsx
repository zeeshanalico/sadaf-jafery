import React from 'react'
import Image from 'next/image'
import img from './../assets/wedding-hands.jpg'
const Services = () => {
  return (
    <div><div className=" bg-gray-50 py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-gray-900 text-3xl font-bold tracking-tight sm:text-4xl">
          Our Services
        </h2>
        <p className="text-gray-700 mt-2 text-lg leading-8">
          We provide a range of services in the Astrologer industry, including Tarot, Numerology, and Astrology.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article className="flex flex-col items-start justify-between">
          <div className="relative w-full">
            <Image
              src={img}
              alt="Service Image"
              className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              width={672}
              height={448}
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          <div className="max-w-xl mt-8">
            <h3 className="text-gray-900 text-lg font-semibold leading-6 urdu">
              کالا جادو کا توڑ
            </h3>
            <p className="text-gray-700 mt-5 line-clamp-3 text-sm leading-6">
              Our Tarot service offers insightful readings to guide you through life's challenges and decisions. Discover your path today.
            </p>
          </div>
        </article>
        <article className="flex flex-col items-start justify-between">
          <div className="relative w-full">
            <Image
              src={img} alt="Service Image"
              className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              width={672}
              height={448}
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          <div className="max-w-xl mt-8">
            <h3 className="text-gray-900 text-lg font-semibold leading-6 urdu">
              من پسند شادی
            </h3>
            <p className="text-gray-700 mt-5 line-clamp-3 text-sm leading-6">
              Explore the mystical world of numbers with our Numerology service. Uncover your life's purpose and potential.
            </p>
          </div>
        </article>
        <article className="flex flex-col items-start justify-between">
          <div className="relative w-full">
            <Image
              src={img} alt="Service Image"
              className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              width={672}
              height={448}
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          <div className="max-w-xl mt-8">
            <h3 className="text-gray-900 text-lg font-semibold leading-6 urdu">
              طلاق کا مسلہ
            </h3>
            <p className="text-gray-700 mt-5 line-clamp-3 text-sm leading-6">
              Our Astrology service provides detailed horoscope readings, helping you understand your personality and future.
            </p>
          </div>
        </article>
      </div>
    </div>
  </div></div>
  )
}

export default Services