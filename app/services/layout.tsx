'use client'
import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer/>

        </>
    );
};

export default layout;
