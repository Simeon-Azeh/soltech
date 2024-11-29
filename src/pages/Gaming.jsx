import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceHero from '../components/ServiceHero';
import Button from '../components/Button';
import PricingCard from '../components/PricingCard';

const Gaming = () => {
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      <NavBar />
      <ServiceHero title="Gaming Lounge" backgroundImage="img/gaming-bg.jpg" />
      <section className="pt-10 pb-16">
        <div className="container px-4 mx-auto">
          <p className="mb-4 text-gray-600">
            Experience next-level gaming at Soltech's Gaming Lounge! Whether you're a casual gamer or a competitive eSports enthusiast, our state-of-the-art gaming hubs provide the ultimate environment to play, connect, and compete.
          </p>
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Membership and Pricing</h3>
          <p className="mb-4 text-gray-600">
            Join the Soltech Gaming Lounge and enjoy exclusive perks and discounts. With a membership, you get <strong>unlimited access</strong> to premium gaming setups and <strong>20% discounts</strong> on hourly sessions.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <PricingCard
              title="Casual"
              price="10,000"
              description="Perfect for occasional gamers who love to unwind."
              features={[
                '1 hour of gaming per day',
                'Access to standard gaming PCs',
                'Complimentary gaming headset',
                '10% discount on snacks',
              ]}
              unavailableFeatures={[
                'Access to premium gaming PCs',
                'VR gaming setups',
                'eSports training sessions',
                'Free tournament entries',
              ]}
            />
            <PricingCard
              title="Pro Gamer"
              price="25,000"
              description="For serious gamers who want an edge."
              features={[
                '5 hours of gaming per day',
                'Access to premium gaming PCs',
                'Complimentary gaming peripherals',
                '20% discount on snacks',
                'VR gaming setups (2 hours per week)',
                '1 free tournament entry per month',
              ]}
              unavailableFeatures={[
                'Dedicated eSports training sessions',
              ]}
              bestPlan={true}
            />
            <PricingCard
              title="eSports Elite"
              price="50,000"
              description="Designed for competitive players and teams."
              features={[
                'Unlimited gaming access',
                'Access to premium and VR gaming setups',
                'Dedicated eSports training sessions',
                'Exclusive team rooms',
                'Free tournament entries',
                'Priority customer support',
                'Complimentary snacks and drinks',
              ]}
              unavailableFeatures={[]}
            />
          </div>
          <Button
            id="join-now-button"
            title="Join the Gaming Lounge"
            containerClass="bg-[#000] text-white mt-8"
            onClick={() => window.location.href = '/register'}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Gaming;
