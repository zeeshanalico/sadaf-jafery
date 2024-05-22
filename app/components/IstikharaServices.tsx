
import Image from "next/image";
const imageData = [
    {
      link: 'https://www.sadafjaffery.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-20-at-6.28.23-PM.jpeg',
      imgSrc: 'https://www.sadafjaffery.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-20-at-6.28.23-PM.jpeg',
      width: 954,
      height: 727,
    },
    {
      link: 'https://www.sadafjaffery.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-20-at-6.40.35-PM.jpeg',
      imgSrc: 'https://www.sadafjaffery.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-20-at-6.40.35-PM.jpeg',
      width: 800,
      height: 450,
    },
    {
      link: 'https://www.sadafjaffery.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-20-at-6.40.34-PM.jpeg',
      imgSrc: 'https://www.sadafjaffery.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-20-at-6.40.34-PM.jpeg',
      width: 512,
      height: 512,
    },
    {
      link: 'https://www.sadafjaffery.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-20-at-6.40.35-PM-1.jpeg',
      imgSrc: 'https://www.sadafjaffery.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-20-at-6.40.35-PM-1.jpeg',
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
            backgroundImage: 'url(http://www.sadafjaffery.com/wp-content/uploads/2020/03/astro-home-clouds.png)',
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
                    src="http://www.sadafjaffery.com/wp-content/uploads/2020/03/astro-home-moon-cycle.png"
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
                    <a href={image.link} rel="lightbox[sc_gallery-1]">
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