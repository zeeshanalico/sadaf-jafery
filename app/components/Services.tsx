import React from 'react';

const servicesData = [
  {
    id: 1,
    imgSrc: '/kaljadoo.jpg',
    imgAlt: 'Service img',
    title: 'کالا جادو کا توڑ',
    description: 'Our Tarot service offers insightful readings to guide you through life\'s challenges and decisions. Discover your path today.'
  },
  {
    id: 2,
    imgSrc: '/wedding-hands.jpg',
    imgAlt: 'Service img',
    title: 'من پسند شادی',
    description: 'Explore the mystical world of numbers with our Numerology service. Uncover your life\'s purpose and potential.'
  },
  {
    id: 3,
    imgSrc: '/divorce.jpg',
    imgAlt: 'Service img',
    title: 'طلاق کا مسلہ',
    description: 'Our Astrology service provides detailed horoscope readings, helping you understand your personality and future.'
  }
];

const handleClick = () => {
  const whatsappUrl = `https://wa.me/${'+923001712141'.replace(/\D/g, '')}`;
  window.open(whatsappUrl, '_blank');
};

const Services = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
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
          {servicesData.map(service => (
            <article key={service.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  src={service.imgSrc}
                  alt={service.imgAlt}
                  className="aspect-[16/9] w-full rounded-t-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  width={672}
                  height={448}
                />
                {/* <div className="absolute inset-0 rounded-2xl  ring-1 ring-inset ring-gray-900/10" ></div> */}
                <div className='border border-gray-300 rounded-b-2xl'>
                  <div className="flex hover:cursor-pointer z-40 items-center space-x-2 my-2 px-5 cursor-pointer" onClick={handleClick}>
                    <div className="text-blue-500 hover:text-blue-600">
                      <span className="[&>svg]:h-7 [&>svg]:w-7">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                      </span>
                    </div>
                    &nbsp;+92-300 1712141
                  </div>
                </div>
              </div>
              <div className="max-w-xl mt-8">
                <h3 className="text-gray-900 text-lg font-semibold leading-6 urdu">
                  {service.title}
                </h3>
                <p className="text-gray-700 mt-5 line-clamp-3 text-sm leading-6">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
