import React from 'react';
// import Layout from './Layout';


const Home: React.FC = () => {
    const submitHandler=()=>{
        
    }
  return (
    <>
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(http://www.sadafjaffery.com/wp-content/uploads/2020/07/contact-us-t-header.jpg)' }}>
  <div className="flex flex-col items-center justify-center h-full space-y-4">
    <h1 className="text-4xl text-white text-center mb-6">Contact us now</h1>
    <div className="flex space-x-4">
      <a href='tel:+92 300 0051248' className="bg-purple-700 text-white px-6 py-2 hover:bg-purple-600 transition duration-300">
        Contact
      </a>
      <a href='/services' className="bg-transparent outline outline-black outline-1 hover:outline-none box-border text-white px-6 py-2 hover:bg-black-700 hover:bg-purple-700 transition duration-300">
        Services
      </a>
    </div>
  </div>
</div>

      <div className="bg-cover bg-center py-20" style={{ backgroundImage: 'url(http://www.sadafjaffery.com/demo/wp-content/uploads/2020/03/astro-home-clouds.png)' }}>
        <div className="container grid grid-cols-1 mx-2 md:grid-cols-3 gap-10 text-black">
          <div>
            <h3 className="text-2xl">Opening hours</h3>
            <p>Monday - Friday: 8AM — 10PM<br />Saturday: 9AM — 10PM<br />Sunday: 10AM — 8PM</p>
          </div>
          <div>
            <h3 className="text-2xl">Contact</h3>
            <p>Phone: +92 300 0051248<br />Whatsapp: +92 300 0051248<br />Email: info@sadafjaffery.com</p>
          </div>
          <div>
            <h3 className="text-2xl">Location</h3>
            <p>Office,<br />#,<br />Pakistan</p>
          </div>
        </div>
      </div>
      <div className="bg-orange-900 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-white">Send me a message</h2>
          <form className="mt-8 space-y-4 mx-2 " >
            <input type="text" placeholder="Name" className="w-full px-4 py-2 border border-gray-300 rounded" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded" />
              <input type="text" placeholder="Subject" className="w-full px-4 py-2 border border-gray-300 rounded" />
            </div>
            <textarea placeholder="Your message" className="w-full px-4 py-2 border border-gray-300 rounded" rows={5}></textarea>
            <button type="submit" className="w-full py-2 bg-purple-600 text-white rounded">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
