import React from 'react';

const Footer: React.FC = () => {
  return (
    <div >
      <footer className="bg-orange-950 text-white py-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h4 className="text-xl font-semibold mb-4">About Us</h4>
              <p className="text-gray-400">
                We are committed to providing the best services. 
Our mission is to illuminate the mysteries of life through Istikhara, Tarot, Numerology, and Astronomy. We strive to empower individuals with knowledge, promote progress, and foster self-discovery.
           
              </p>
            </div>
      
            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h4 className="text-xl font-semibold mb-4">Navigation</h4>
              <ul className="text-gray-400">
                <li className="mb-2"><a href="/blog" className="hover:underline">Blog</a></li>
                <li className="mb-2"><a href="/services" className="hover:underline">Services</a></li>
                <li className="mb-2"><a href="/contact" className="hover:underline">Contact</a></li>


              </ul>
            </div>
      
            {/* Contact Section */}
            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <ul className="text-gray-400">
                <li className="mb-2">Email: info@sadafjaffery.com</li>
                <li className="mb-2">Phone : +92 300 0051248</li>
                <li className="mb-2">WhatsApp: +92 300 1712141</li>

                <li className="mb-2">Address: Office, #, Pakistan</li>
                
                
              </ul>
            </div>
      
            {/* Social Media Section */}
            {/* <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f">Facebook</i>
                </a>
                <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter">Twitter</i>
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin-in">LinkedIn</i>
                </a> 
                <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram">Instgram</i>
                </a>
              </div>
            </div> */}
          </div>
      
          {/* Footer Bottom Section */}
          <div className="text-center text-gray-400 mt-10">
          <p className="mt-4">&copy; {new Date().getFullYear()} Sadaf Jaffery. All Rights Reserved. <a href="http://www.linkedin.com/in/zeeshanalico" target='_blank' className="hover:underline">Zeeshan Ali</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
