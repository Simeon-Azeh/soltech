import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const GreetingCard = () => {
  const [userName, setUserName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserName(userDoc.data().name);
        }
      }
    };

    const determineGreeting = () => {
      const currentHour = new Date().getHours();
      if (currentHour < 12) {
        setGreeting('Good morning');
        setMessage('Start your day with a smile and make the most of it!');
      } else if (currentHour < 18) {
        setGreeting('Good afternoon');
        setMessage('Hope you are having a productive day!');
      } else {
        setGreeting('Good evening');
        setMessage('Relax and unwind, you deserve it!');
      }
    };

    fetchUserName();
    determineGreeting();
  }, []);

  return (
    <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white">{greeting}, {userName}!</h2>
      <p className="mt-2 text-white">
        {message} Explore your services and manage your account with ease.
      </p>
    </div>
  );
};

export default GreetingCard;