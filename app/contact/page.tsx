'use client'
import React, { useState } from 'react';
import axios from 'axios';

const Home: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [buttonText, setButtonText] = useState('Send');

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);
    setButtonText('Sending...');
  
    const data = {
      name,
      email,
      subject,
      message,
    };
    
    try {
      const response = await axios.post('/api', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
  
      if (response.status === 200) {
        setResponse(response.data.message);
        setButtonText('✓');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');

        setTimeout(() => {
          setButtonText('Send');
          setResponse(null)
        }, 3000);
      } else {
        setResponse('Failed to send message. Please try again later.');
        setButtonText('Send');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setResponse('An error occurred. Please try again later.');
      setButtonText('Send');
    } finally {
      setLoading(false);
    }
  };
  
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
            <p>Phone: +92 300 0051248<br />Whatsapp: +92 300 1712141<br />Email: info@sadafjaffery.com</p>
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
          <form className="mt-8 space-y-4 mx-2" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <textarea
              placeholder="Your message"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="w-full py-2 bg-purple-600 text-white rounded" disabled={loading}>
              {loading ? 'Sending...' : buttonText}
            </button>
          </form>
          {response && <p className="mt-4 text-white">{response}</p>}
        </div>
      </div>
    </>
  );
};

export default Home;
