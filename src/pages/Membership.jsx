import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceHero from '../components/ServiceHero';
import Button from '../components/Button';
import Accordion from '../components/Accordion';
import { Carousel } from 'antd';
import { HiOutlineSparkles } from "react-icons/hi";
import { PiHandCoinsDuotone } from "react-icons/pi";
import { LuSparkles } from "react-icons/lu";
import { AiOutlineGold } from "react-icons/ai";
import { FaCrown } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const Membership = () => {
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      <NavBar />
      <ServiceHero title="Membership" backgroundImage="img/membership-bg.jpg" />
      <section className="px-4 py-16 md:px-8">
        <div className="container pr-2 md:pr-0">

          {/* Membership Cards */}
          <h3 className="mb-4 text-3xl font-semibold text-center text-gray-800">Earn Your Membership</h3>
          <p className="mb-12 text-center text-gray-800">Unlock exclusive benefits by earning points, completing challenges, and referring friends. Here's what you can aim for:</p>
          <div className="grid gap-8 mx-auto md:grid-cols-3">
            {/* Starlite Card */}
            <div className="p-6 text-white rounded-lg shadow-lg bg-gradient-to-r from-black to-slate-700">
              <h3 className="flex items-center gap-2 mb-4 text-2xl font-medium text-white"><HiOutlineSparkles />Starlite</h3>
              <p className="mb-4 text-gray-50">Perfect for students and hobbyists. Earn this by accumulating 500 points.</p>
              <ul className="mb-4 text-sm list-disc list-inside text-slate-100">
                <li>Access to beginner workshops</li>
                <li>Discounts on snacks</li>
                <li>Monthly gaming nights</li>
              </ul>
              <p className="text-sm font-medium text-white">Points Required: <span className="flex items-center gap-1 font-semibold"><PiHandCoinsDuotone /> 500</span></p>
            </div>

            {/* Bronze Card */}
            <div className="p-6 border border-white rounded-lg shadow-lg bg-gradient-to-r from-orange-700 to-orange-400">
              <h3 className="flex items-center gap-2 mb-4 text-2xl font-medium text-white"><LuSparkles />Bronze</h3>
              <p className="mb-4 text-white">Designed for developers and gamers. Achieve this by referring 3 friends or earning 1000 points.</p>
              <ul className="mb-4 text-sm text-white list-disc list-inside">
                <li>Priority event access</li>
                <li>10% discount on rentals</li>
                <li>Exclusive community badge</li>
              </ul>
              <p className="text-sm font-medium text-white">Points Required: <span className="flex items-center gap-1 font-semibold"><PiHandCoinsDuotone /> 1000</span> or <span className="text-white-600">10 referrals</span></p>
            </div>

            {/* Gold Card */}
            <div className="p-6 border border-white rounded-lg shadow-lg bg-gradient-to-r from-yellow-700 to-yellow-600">
              <h3 className="flex items-center gap-2 mb-4 text-2xl font-medium text-white"><AiOutlineGold />Gold</h3>
              <p className="mb-4 text-white">For true enthusiasts. Unlock this by completing challenges or earning 2500 points.</p>
              <ul className="mb-4 text-sm text-white list-disc list-inside">
                <li>Access to premium workshops</li>
                <li>Free game rentals (2 per month)</li>
                <li>Exclusive merchandise</li>
              </ul>
              <p className="text-sm font-medium text-white">Points Required: <span className="flex items-center gap-1 font-semibold"><PiHandCoinsDuotone />2500</span> or <span className="text-white">challenges</span></p>
            </div>

            {/* Platinum Card */}
            <div className="p-6 border border-white rounded-lg shadow-lg bg-gradient-to-r from-purple-800 to-purple-500">
              <h3 className="flex items-center gap-2 mb-4 text-2xl font-medium text-white"><FaCrown />Platinum</h3>
              <p className="mb-4 text-white">For the elite members. Unlock this by completing advanced challenges or earning 5000 points.</p>
              <ul className="mb-4 text-sm text-white list-disc list-inside">
                <li>Access to all workshops</li>
                <li>Unlimited game rentals</li>
                <li>Exclusive platinum merchandise</li>
                <li>VIP event access</li>
              </ul>
              <p className="text-sm font-medium text-white">Points Required: <span className="flex items-center gap-1 font-semibold"><PiHandCoinsDuotone />5000</span> or <span className="text-white">advanced challenges</span></p>
            </div>
          </div>

          {/* FAQs */}
          <h3 className="mt-16 mb-8 text-3xl font-bold text-center text-gray-800">FAQs</h3>
          <Accordion
            title="How do I earn points?"
            content="You can earn points by participating in events, completing challenges, and referring friends. Each activity has a specific point value."
          />
          <Accordion
            title="Can I transfer points to someone else?"
            content="Points are non-transferable and tied to your account to ensure fairness in the reward system."
          />
          <Accordion
            title="How do referrals work?"
            content="When you refer a friend, they need to use your referral code during sign-up. Once they activate their account, you earn referral points."
          />
          <Accordion
            title="What happens if I don’t reach the points required?"
            content="If you don’t reach the points required for a card, don’t worry! Your points will remain in your account, and you can keep earning to unlock your desired membership."
          />

          {/* Testimonials */}
          <h3 className="mt-16 mb-8 text-3xl font-bold text-center text-gray-800">What Our Members Say</h3>
          <Carousel autoplay>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaQuoteLeft className="mb-4 text-3xl text-gray-400" />
              <p className="italic text-gray-600">"Joining Soltech's membership program has been a game-changer for me. The priority access to workshops and the discounts on snacks are fantastic!"</p>
              <p className="mt-4 text-right text-gray-800">- Jean-Pierre Mvondo</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaQuoteLeft className="mb-4 text-3xl text-gray-400" />
              <p className="italic text-gray-600">"The gaming setups are top-notch, and the community support is amazing. Highly recommend the Pro Gamer plan!"</p>
              <p className="mt-4 text-right text-gray-800">- Amina Njoya</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaQuoteLeft className="mb-4 text-3xl text-gray-400" />
              <p className="italic text-gray-600">"The workspace environment is perfect for collaboration and innovation. The Platinum membership is worth every point!"</p>
              <p className="mt-4 text-right text-gray-800">- Samuel Fokou</p>
            </div>
          </Carousel>

          {/* Call-to-Action */}
          <div className="flex justify-center mt-16">
            <Button
              id="join-now-button"
              title="Earn Your Membership"
              containerClass="bg-[#000] text-black hover:bg-white hover:text-black"
              onClick={() => window.location.href = '/register'}
            />
          </div>

        
        

          {/* Membership Management */}
          <h3 className="mt-16 mb-8 text-3xl font-bold text-center text-gray-800">Membership Management</h3>
          <p className="mb-4 text-center text-gray-600">
            Already a member? <a href="/login" className="text-blue-500 hover:underline">Log in</a> to manage your subscription.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Membership;