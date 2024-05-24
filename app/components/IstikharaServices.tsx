import React from 'react';
import cloud from '../assets/astro-home-clouds.png';

const imageData = [
  {
    imgSrc: '/WhatsApp-Image-2024-01-20-at-6.jpeg',
    width: 954,
    height: 727,
  },
  {
    imgSrc: '/WhatsApp-Image-2024-01-20-at-6 (1).jpeg',
    width: 800,
    height: 450,
  },
  {
    imgSrc: '/WhatsApp-Image-2024-01-20-at-6 (3).jpeg',
    width: 472,
    height: 247,
  },
];

const IstikharaServices = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center pt-12"
        style={{
          backgroundImage: `url(${cloud})`,
        }}
      >
        <div className="">
          <div className="flex justify-center">
            <div>
              <div className="flex justify-center">

              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <div className="w-full sm:w-2/3 text-center">
              <h3 className="text-2xl font-bold">
                Don't wait for things to happen,
                <br />
                discover your life path today
              </h3>
              <hr className="my-6 border-gray-300" />
              <p className="text-lg">
                We are here to provide you the most common and famous astrology services, our main
                services are Black magic removal, Online istikharah.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <a
              className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
              href="/contact"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="bg-transparent py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-2">
              {imageData.map((image, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-2">
                  <div className="relative overflow-hidden rounded-lg w-full h-64">
                    <img
                      src={image.imgSrc}
                      alt=""
                      className="object-fill w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IstikharaServices;
