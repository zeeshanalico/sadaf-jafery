'use client'
import React from 'react';
import Navbar from '../components/NavBar';
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-orange-900 text-white p-4 text-center">
        <div>
          <img src="https://themes.muffingroup.com/be/astrology/wp-content/uploads/2020/03/astro-footer-icon.png" alt="Footer Icon" className="mx-auto" />
          <p>Contact<br />+92 300 0051248</p>
          <p>Whatsapp<br />+92 300 1712141</p>

        </div>
        <p className="mt-4">&copy; 2020 Sadaf Jaffery. All Rights Reserved. <a href="http://www.linkedin.com/in/zeeshanalico" className="hover:underline">Zeeshan Ali</a></p>

      </footer>
    </div>
  );
};

export default layout;
