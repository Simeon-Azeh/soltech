import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Accordion from '../components/Accordion';
import ServiceHero from '../components/ServiceHero';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setFormMessage('Thank you for contacting us!');
    setName('');
    setEmail('');
    setMessage('');
  };

  const faqs = [
    {
      title: 'How can I contact customer support?',
      content: 'You can contact our customer support team via email at support@example.com or call us at +1 (123) 456-7890.',
    },
    {
      title: 'What are your office hours?',
      content: 'Our office hours are Monday to Friday, 9:00 AM to 5:00 PM.',
    },
    {
      title: 'Where is your office located?',
      content: 'Our office is located at 123 Main Street, Anytown, USA.',
    },
  ];

  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      <NavBar />
      <ServiceHero title="Contact Us" backgroundImage="img/contact-bg.jpg" />
      <section className="px-4 py-16 md:px-8 ">
        <div className="container flex flex-col items-center mx-auto md:flex-row">
          {/* Contact Information */}
          <div className="mb-6 md:w-1/2 md:mb-0 md:pr-6">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800">Contact Details</h3>
            <p className="mb-4 text-gray-800">We'd love to hear from you! Reach out to us using the information below or fill out the form to send us a message.</p>
            <div className="grid grid-cols-1 gap-4 pr-2 md:pr-0 md:grid-cols-2">
              <div className="flex items-center px-2 py-4 mb-4 bg-white rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 p-4 bg-black rounded-full">
                  <FaPhoneAlt className="text-white" />
                </div>
                <div className="ml-4">
                  <h2 className="font-semibold text-gray-800">Mobile</h2>
                  <p className="text-gray-600">+237 670 349 922</p>
                </div>
              </div>
              <div className="flex items-center px-2 py-4 mb-4 bg-white rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 p-4 bg-black rounded-full">
                  <FaEnvelope className="text-white" />
                </div>
                <div className="ml-4">
                  <h2 className="font-semibold text-gray-800">Email</h2>
                  <p className="text-gray-600">contact@soltech.com</p>
                </div>
              </div>
              <div className="flex items-center px-2 py-4 mb-4 bg-white rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 p-4 bg-black rounded-full">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div className="ml-4">
                  <h2 className="font-semibold text-gray-800">Address</h2>
                  <p className="text-gray-600">Molyko, Buea, Cameroon</p>
                </div>
              </div>
              <div className="flex items-center px-2 py-4 mb-4 bg-white rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 p-4 bg-black rounded-full">
                  <FaClock className="text-white" />
                </div>
                <div className="ml-4">
                  <h2 className="font-semibold text-gray-800">Availability</h2>
                  <p className="text-gray-600">Daily, 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full p-6 bg-black rounded-lg md:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="p-2 mb-4 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-2 mb-4 border border-gray-300 rounded-lg"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                className="p-2 mb-4 border border-gray-300 rounded-lg"
                rows="5"
                required
              />
              <Button
                title="Send Message"
                containerClass="bg-blue-500 text-black "
                type="submit"
              />
            </form>
            {formMessage && <p className="mt-4 text-green-500">{formMessage}</p>}
          </div>
        </div>
      </section>
      <section className="px-4 py-16 md:px-8">
        <div className="container mx-auto">
          <h3 className="mb-8 text-2xl font-bold text-gray-800">Frequently Asked Questions</h3>
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.title} content={faq.content} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;