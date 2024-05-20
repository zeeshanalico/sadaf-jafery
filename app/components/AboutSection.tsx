import React from 'react';

const AboutSection = () => {
  return (
    <div className="py-12 bg-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center bg-orange-400 py-2 rounded-lg">About Us</h2>
        <div className=" text-white p-6 bg-red-700 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
          <p className="mb-4">
            Our mission is to deliver exceptional products and services that enrich the lives of our customers. We believe in the power of innovation, the strength of teamwork, and the importance of sustainability.
          </p>
          <h3 className="text-2xl font-bold mb-2">Our Values</h3>
          <ul className="list-disc list-inside">
            <li className="mb-2"><strong>Integrity:</strong> We adhere to the highest standards of honesty and ethical conduct.</li>
            <li className="mb-2"><strong>Customer Focus:</strong> Our customers are at the heart of everything we do.</li>
            {/* <li className="mb-2"><strong>Innovation:</strong> We embrace change and continuously seek new ways to improve.</li>
            <li className="mb-2"><strong>Excellence:</strong> We strive for excellence in every aspect of our business.</li>
            <li className="mb-2"><strong>Teamwork:</strong> We work together, across boundaries, to meet the needs of our customers and to help the company win.</li> */}
            <li><strong>Sustainability:</strong> We are committed to protecting the environment and using resources responsibly.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
