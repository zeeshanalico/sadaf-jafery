import React from 'react';

const AboutSection = () => {
  return (
    <div className="py-12 bg-red-600 " id='about'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-100 mb-4 text-center py-2 text-3xl font-bold tracking-tight sm:text-4xl">About Us</p>
        <div className="text-white p-6 ">
          <div className="flex gap-5 items-center mb-4"><h2 className="text-gray-100 text-3xl font-bold tracking-tight sm:text-4xl">Our Mission</h2> <svg className="text-gray-100 h-12 w-12 opacity-25 order-first" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path></svg></div>
          <div className='text-xl md:text-3xl urdu leading-relaxed text-gray-100 md:px-28'>
            Our mission is to illuminate the mysteries of life through Istikhara, Tarot, Numerology, and Astronomy. We strive to empower individuals with knowledge, promote progress, and foster self-discovery.</div>
          <ul className="list-disc list-inside">
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
