import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Header';
import SubscriptionCards from '../components/SubscriptionCards';
import GreetingCard from '../components/GreetingCard';
import BillingOverview from '../components/BillingOverview';
import PaymentHistory from '../components/PaymentHistory';
import Banner from '../components/Banner';

const DashboardPage = () => {
  return (
    <div className="flex bg-[#141414]">
      <Sidebar />
      <div className="flex-1 lg:ml-64">
        <div className=" mt-[70px]">
        
          <Navbar />
        </div>
        <main className="p-6 pt-2"> {/* Adjust padding to account for the fixed Navbar */}
          <GreetingCard />
          <div className="">
            <SubscriptionCards />
          </div>
          <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
            <BillingOverview />
            <PaymentHistory />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;