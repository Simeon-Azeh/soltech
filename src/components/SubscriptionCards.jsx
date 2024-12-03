import React from 'react';

const SubscriptionCards = () => {
  const subscriptions = [
    { type: 'Internet', subscribed: '2024-01-15', expires: '2025-01-14', color: 'bg-blue-500' },
    { type: 'Gaming', subscribed: '2024-02-01', expires: '2025-02-01', color: 'bg-green-500' },
    { type: 'Workspace', subscribed: '2024-03-10', expires: '2025-03-09', color: 'bg-yellow-500' },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {subscriptions.map((sub, index) => (
        <div key={index} className={`p-6 rounded-lg shadow-md ${sub.color}`}>
          <h2 className="text-lg font-bold text-white">{sub.type} Subscription</h2>
          <p className="text-sm text-white">Subscribed: {sub.subscribed}</p>
          <p className="text-sm text-white">Expires: {sub.expires}</p>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionCards;