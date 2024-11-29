import React, { useRef } from 'react';
import { IoSparklesOutline, IoGameControllerOutline, IoDesktopOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesHero from '../components/ServicesHero';
import Button from '../components/Button';

function Services() {
  const cardRefs = useRef([]);

  const handleMouseEnter = (index) => {
    cardRefs.current[index].classList.add('scale-105');
  };

  const handleMouseLeave = (index) => {
    cardRefs.current[index].classList.remove('scale-105');
  };

  const { ref: techTrainingRef, inView: techTrainingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: gamingRef, inView: gamingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: workspacesRef, inView: workspacesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      <NavBar />
      <ServicesHero />
      <section className="py-16 mb-8">
        <div className="container px-4 mx-auto">
          {/* Membership Benefits */}
          <div className="flex flex-col items-center justify-start p-4 py-6 mb-8 text-center bg-black rounded-lg shadow-lg md:flex-row md:text-left">
            <div className="flex-1 mt-4 md:mt-0">
              <h2 className="flex items-center gap-2 mb-2 font-semibold text-justify text-white md:text-2xl">
                <IoSparklesOutline className="md:text-2xl" /> Exclusive Soltech Membership Benefits
              </h2>
              <p className="mb-4 text-justify text-gray-300">
                With a Soltech membership, you gain <strong>25% discounts</strong> on all services, early access to special offers, and access to member-only perks. Elevate your experience with our exclusive deals tailored for tech enthusiasts and gamers!
              </p>
              <Button
                id="join-now-button"
                title="Join Now"
                containerClass="bg-white text-gray-900"
              />
            </div>
          </div>

          {/* Services Section */}
          <h2 className="mb-8 text-3xl font-semibold text-center text-gray-800">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Tech Training */}
            <div
              ref={(el) => {
                cardRefs.current[0] = el;
                techTrainingRef(el);
              }}
              className="p-6 text-white transition-transform transform bg-black border border-white rounded-lg shadow-lg hover:scale-105"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
            >
              <h3 className="flex items-center gap-2 mb-4 text-xl font-medium text-white">
                <IoSparklesOutline className="mr-2" /> Tech Training
              </h3>
              <p className="mb-4 text-slate-100">
                At Soltech, we offer cutting-edge tech training programs designed to equip you with the skills needed to thrive in the tech industry. Our courses cover a wide range of topics, from software development to cybersecurity.
              </p>
              {techTrainingInView && (
                <CountUp end={500} duration={8} className="text-2xl font-medium text-white" />
              )}
              <p className="text-white">Students Trained</p>
              <Link to="/tech-training" className="flex items-center mt-4 text-white hover:underline">
                Learn More <FaArrowRight className="ml-2" />
              </Link>
            </div>

            {/* Gaming */}
            <div
              ref={(el) => {
                cardRefs.current[1] = el;
                gamingRef(el);
              }}
              className="p-6 transition-transform transform bg-black border rounded-lg shadow-lg hover:scale-105"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
            >
              <h3 className="flex items-center mb-4 text-xl font-medium text-white">
                <IoGameControllerOutline className="mr-2 text-white" /> Gaming
              </h3>
              <p className="mb-4 text-slate-100">
                Immerse yourself in the world of gaming with Soltech. We provide state-of-the-art gaming facilities and host regular gaming events and tournaments. Join our community of gamers and experience the thrill of competitive gaming.
              </p>
              {gamingInView && (
                <CountUp end={200} duration={8} className="text-2xl font-medium text-white" />
              )}
              <p className="text-white">Gamers Engaged</p>
              <Link to="/gaming" className="flex items-center mt-4 text-white hover:underline">
                Learn More <FaArrowRight className="ml-2" />
              </Link>
            </div>

            {/* Workspaces & Hubs */}
            <div
              ref={(el) => {
                cardRefs.current[2] = el;
                workspacesRef(el);
              }}
              className="p-6 transition-all duration-300 transform bg-black border rounded-lg shadow-lg hover:scale-105"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
            >
              <h3 className="flex items-center mb-4 text-xl font-medium text-white">
                <IoDesktopOutline className="mr-2 " /> Workspaces & Hubs
              </h3>
              <p className="mb-4 text-slate-100">
                Our collaborative workspaces and hubs are designed to foster innovation and creativity. Whether you're a freelancer, startup, or established business, our workspaces provide the perfect environment to collaborate & grow.
              </p>
              {workspacesInView && (
                <CountUp end={350} duration={8} className="text-2xl font-medium text-white" />
              )}
              <p className="text-white">Members</p>
              <Link to="/workspaces" className="flex items-center mt-4 text-white hover:underline">
                Learn More <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Services;