import React from 'react';

const UpcomingEvents = () => {
  const events = [
    { title: 'Gaming Tournament', date: '2024-12-15' },
    { title: 'Tech Workshop', date: '2024-12-20' },
    { title: 'Networking Event', date: '2024-12-25' },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-lg font-bold">Upcoming Events</h2>
      <ul className="space-y-2">
        {events.map((event, index) => (
          <li key={index} className="flex justify-between text-gray-600">
            <span>{event.title}</span>
            <span>{event.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEvents;