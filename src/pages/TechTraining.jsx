import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceHero from '../components/ServiceHero';
import Button from '../components/Button';
import PricingCard from '../components/PricingCard';

const TechTraining = () => {
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      <NavBar />
      <ServiceHero title="Tech Training" backgroundImage="img/tech-training-bg.jpg" />
      <section className="pt-10 pb-16">
        <div className="container px-4 mx-auto">
          <p className="mb-4 text-gray-600">
            At Soltech, we aim to empower individuals with the skills they need to excel in the tech world. Our training programs are designed to provide practical, hands-on experience, ensuring you are job-ready in today's tech-driven economy.
          </p>
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Membership and Pricing</h3>
          <p className="mb-4 text-gray-600">
            Become a Soltech member to access top-notch tech training at discounted rates. With a membership, you enjoy <strong>priority access</strong> to courses, <strong>one-on-one mentorship</strong>, and <strong>30% discounts</strong> on premium workshops.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <PricingCard
              title="Beginner"
              price="15,000"
              description="Ideal for those starting their journey in tech."
              features={[
                'Access to foundational courses',
                'Community support forums',
                'Weekly progress tracking',
                'Certificate of completion',
              ]}
              unavailableFeatures={[
                'Access to advanced courses',
                'Personalized mentorship',
                'Premium workshops',
                'Career counseling sessions',
              ]}
            />
            <PricingCard
              title="Professional"
              price="30,000"
              description="For tech enthusiasts looking to advance their careers."
              features={[
                'Access to intermediate and advanced courses',
                'Personalized mentorship (5 sessions)',
                'Monthly progress reviews',
                'Premium workshop access (1 per month)',
                'Career counseling sessions (1 per quarter)',
              ]}
              unavailableFeatures={[
                'Unlimited mentorship sessions',
              ]}
              bestPlan={true}
            />
            <PricingCard
              title="Expert"
              price="50,000"
              description="Designed for professionals aiming to master their craft."
              features={[
                'Unlimited course access',
                'Unlimited personalized mentorship sessions',
                'Access to all premium workshops',
                'Priority support and networking events',
                'Career counseling and job placement support',
                'Exclusive certifications',
              ]}
              unavailableFeatures={[]}
            />
          </div>
          <Button
            id="join-now-button"
            title="Join the Tech Training"
            containerClass="bg-[#000] text-white mt-8"
            onClick={() => window.location.href = '/register'}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default TechTraining;
