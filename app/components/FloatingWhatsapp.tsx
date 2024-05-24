// components/FloatingWhatsApp.js

import React from 'react';
import PropTypes from 'prop-types';

const FloatingWhatsApp = ({ number }: { number: string }) => {
    const handleClick = () => {
        const whatsappUrl = `https://wa.me/${number.replace(/\D/g, '')}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 cursor-pointer " onClick={handleClick}>
            <img
                src='/WhatsApp-Logo.png'
                alt="WhatsApp Logo"
                width={100}
                height={100}
                className="mr-2 mb-5 hover:opacity-85"
            />
        </div>
    );
};

FloatingWhatsApp.propTypes = {
    number: PropTypes.string.isRequired,
};

export default FloatingWhatsApp;
