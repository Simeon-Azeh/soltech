import React, { useState } from 'react';
import Button from '../components/Button'; // Adjust the import path as necessary

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setMessage('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="flex flex-col items-center p-6 px-8 bg-black rounded-lg shadow-lg md:flex-row">
      <div className="mb-6 md:w-1/2 md:mb-0 md:pr-6">
        <h3 className="mb-4 text-2xl font-semibold text-white">Subscribe to our Newsletter</h3>
        <p className="mb-4 text-white">Stay updated with our latest news and offers. Don't worry we don't do too much!</p>
      </div>
      <div className="md:px-8 md:w-1/2">
        <form onSubmit={handleSubmit} className="flex flex-col">
            <h2 className='py-4 font-medium text-white'>Sign up for our Newsletter</h2>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            className="w-full p-2 px-6 mb-4 border border-gray-300 rounded-full"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="p-2 px-6 mb-4 border border-gray-300 rounded-full"
            required
          />
          <Button
            title="Subscribe"
            containerClass="bg-blue-500 text-black"
            type="submit"
          />
        </form>
        {message && <p className="mt-4 text-green-500">{message}</p>}
      </div>
    </div>
  );
};

export default Newsletter;