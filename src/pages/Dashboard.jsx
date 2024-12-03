import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Header';
import SubscriptionCards from '../components/SubscriptionCards';
import SubscriptionCharts from '../components/SubscriptionCharts';
import UpcomingEvents from '../components/UpcomingEvents';
import GreetingCard from '../components/GreetingCard';

const DashboardPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 lg:ml-64">
        <Navbar />
        <main className="p-6 pt-20"> {/* Added pt-20 to account for the fixed Navbar */}
          <GreetingCard />
          <div className="">
            <SubscriptionCards />
          </div>
          <div className="mb-6">
            <SubscriptionCharts />
          </div>
          <UpcomingEvents />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;