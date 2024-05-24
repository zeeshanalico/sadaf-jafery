
import servicesData from "../data/servicesData";
function Services() {
    return (
      <div className="pb-36" id="destiny">
        <div className="container m-auto">
            <div className="text-center animate-bounceUpIn m-12 flex flex-row items-center justify-center ">
              <img
                src="/servicesAsset/sadar-jaffare-home-page-icone.png"
                alt="sadar-jaffare-home-page-icone"
                width={491}
                height={491}
              />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Looking For Istikhara Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {servicesData.map((service, index) => (
              <ServiceItem
                key={index}
                link={service.link}
                imgSrc={service.imgSrc}
                title={service.title}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  function ServiceItem({ link, imgSrc, title }: { link: string, imgSrc: string, title: string }) {
    return (
      <div className="text-center animate-zoomIn  m-auto">
        <a href={link} className="block mb-4">
          <div className=" overflow-hidden">
            <img
              src={imgSrc}
              alt={title}
              width={339}
              height={254}
              className="transform hover:scale-105 transition-transform duration-300 animate-bounceUpIn"
            />
          </div>
        </a>
        <h6 className="text-xl font-semibold">{title}</h6>
      </div>
    );
  }
  export default Services