'use client'
import FloatingWhatsApp from '../components/FloatingWhatsapp';
import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
            <FloatingWhatsApp number='+923001712141' />

            <Footer/>

        </>
    );
};

export default layout;
