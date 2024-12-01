import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceHero from '../components/ServiceHero';
import Newsletter from '../components/Newsletter';

const Contest = () => {
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      <NavBar />
      <ServiceHero title="Contests" backgroundImage="img/contest-bg.jpg" />
      <section className="px-4 py-16 md:px-8">
        <div className="container mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Upcoming Contests</h2>
          <p className="mb-20 text-center text-gray-600">Stay tuned for our upcoming contests and competitions. Participate and win exciting prizes!</p>
          <Newsletter />
          {/* Add more content about contests here */}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contest;