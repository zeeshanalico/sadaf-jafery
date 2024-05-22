
import Image from "next/image";
import img from '../assets/WhatsApp-Image-2024-01-20-at-6.jpeg'
import img1 from '../assets/WhatsApp-Image-2024-01-20-at-6 (1).jpeg'
import img2 from '../assets/WhatsApp-Image-2024-01-20-at-6 (2).jpeg'
import img3 from '../assets/WhatsApp-Image-2024-01-20-at-6 (3).jpeg'
import cloud from '../assets/astro-home-clouds.png'

const imageData = [
    {
      link: img,
      imgSrc: img,
      width: 954,
      height: 727,
    },
    {
      link: img1,
      imgSrc: img1,
      width: 800,
      height: 450,
    },
    {
      link: img2,
      imgSrc: img2,
      width: 512,
      height: 512,
    },
    {
      link: img3,
      imgSrc: img3,
      width: 472,
      height: 247,
    },
  ];
  
  const IstikharaServices = () => {
    return (
      <div>
        <div
        className="bg-cover"
        style={{
          paddingTop: '50px',
          paddingBottom: '200px',
          backgroundImage: `url(${cloud.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom',
        }}
      >
          <div className="container mx-auto">
            <div className="flex justify-center">
              <div>
                <div className="flex justify-center">
                  <Image
                    className="mx-auto"
                    src={img}
                    alt=""
                    width={600}
                    height={600}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <div className="w-2/3 text-center ">
                <h3>
                  Don't wait for things to happen, <br /> discover your life path today
                </h3>
                <hr className="my-6" />
                <p className="text-white">
                  We are here to provide you the most common and famous astrology services, our main
                  services are Black magic removal, Online istikharah.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <a className="bg-purple-600 text-white py-2 px-4 rounded" href="/contact">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              {imageData.map((image, index) => (
                <div key={index} className="w-1/3 p-2">
                  <div className="relative overflow-hidden rounded-lg">
                    <a  rel="lightbox[sc_gallery-1]">
                      <Image src={image.imgSrc} alt="" width={image.width} height={image.height} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  
  export default IstikharaServices;