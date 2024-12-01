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
      title: 'What services does Soltech offer?',
      content: 'Soltech provides a range of services, including Tech Training, Gaming, and Workspaces/Hubs. Our mission is to redefine the tech ecosystem in Africa with a gaming-inspired approach.',
    },
    {
      title: 'Where is Soltech located?',
      content: 'Our office is located in Molyko, Buea, Cameroon. Visit us for an immersive experience in gaming, tech training, or to explore our workspace options.',
    },
    {
      title: 'How can I contact Soltech?',
      content: 'You can reach us via email at contact@soltech.com or call us at +237 654 321 987. For real-time inquiries, visit us during our office hours.',
    },
    {
      title: 'What are your office hours?',
      content: 'Our office hours are Monday to Saturday, 8:00 AM to 6:00 PM. We’re closed on Sundays and public holidays.',
    },
    {
      title: 'How do I enroll in a tech training course?',
      content: 'Visit our website or office to view available courses and enrollment details. Our team is happy to assist you with the process.',
    },
    {
      title: 'What games are available at Soltech’s gaming center?',
      content: 'Our gaming center offers a wide selection of the latest PC, console, and VR games. Whether you’re a casual gamer or a pro, we have something for everyone.',
    },
    {
      title: 'Can I rent a workspace at Soltech?',
      content: 'Yes, we provide flexible workspace options for individuals and teams. Contact us to learn more about our packages and pricing.',
    },
    {
      title: 'Does Soltech organize events or competitions?',
      content: 'Absolutely! We host regular gaming competitions, tech hackathons, and community events. Follow us on social media for updates on upcoming events.',
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
          <h2 className='mt-4 text-xl font-semibold text-white '>Leave us a message</h2>
          <p className='mt-2 mb-4 text-sm text-white'>We typically respond within a few hours</p>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="p-2 px-4 mb-4 text-white bg-transparent border border-white rounded-full"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-2 px-4 mb-4 text-white bg-transparent border border-white rounded-full"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                className="p-2 px-4 mb-4 text-white bg-transparent border border-white rounded-lg"
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