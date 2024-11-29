import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceHero from '../components/ServiceHero';
import Button from '../components/Button';
import PricingCard from '../components/PricingCard';

const Workspaces = () => {
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      <NavBar />
      <ServiceHero title="Workspaces & Hubs" backgroundImage="img/workspaces-bg.jpg" />
      <section className="pt-10 pb-16">
        <div className="container px-4 mx-auto">
          <p className="mb-4 text-gray-600">
            Our collaborative workspaces and hubs are designed to foster innovation and creativity. Whether you're a freelancer, startup, or established business, our workspaces provide the perfect environment to collaborate and grow.
          </p>
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Discounts and Pricing</h3>
          <p className="mb-4 text-gray-600">
            With a Soltech membership, you gain <strong>25% discounts</strong> on all workspace services. Our pricing is competitive and designed to provide the best value for your collaborative needs.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <PricingCard
              title="Basic Plan"
              price="15,000"
              description="A starter plan for individuals or small teams."
              features={[
                'Access to shared workspaces',
                '10 Mbps internet speed (50GB limit)',
                'Community support',
                '8 AM - 6 PM access',
                'Complimentary tea/coffee',
              ]}
              unavailableFeatures={[
                'Access to private workspaces',
                '50 Mbps internet speed (200GB limit)',
                'Priority support',
                '24/7 access',
                '2 hours of free meeting room use per week',
                'Complimentary snacks and drinks',
              ]}
            />
            <PricingCard
              title="Pro Plan"
              price="29,900"
              description="An advanced plan for growing teams and startups."
              features={[
                'Access to private workspaces',
                '50 Mbps internet speed (200GB limit)',
                'Priority support',
                '24/7 access',
                '2 hours of free meeting room use per week',
                'Complimentary snacks and drinks',
              ]}
              unavailableFeatures={[
                'Dedicated support',
                'Daily updates',
              ]}
              bestPlan={true}
            />
            <PricingCard
              title="Enterprise Plan"
              price="49,900"
              description="A comprehensive plan for large enterprises."
              features={[
                'Access to all workspaces',
                'Dedicated support',
                'Daily updates',
                '50 Mbps internet speed (200GB limit)',
                'Priority support',
                '24/7 access',
                '2 hours of free meeting room use per week',
                'Complimentary snacks and drinks',
              ]}
              unavailableFeatures={[]}
            />
          </div>
         
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Workspaces;