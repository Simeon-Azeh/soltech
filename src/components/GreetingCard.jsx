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
    <div className="p-6 mb-6 bg-[#282828] rounded-lg ">
      <h2 className="text-xl font-medium text-slate-100">{greeting}, <span className='text-slate-300'>{userName}</span>!</h2>
      <p className="mt-2 text-sm font-medium text-slate-200">
        {message} Explore your services and manage your account with ease.
      </p>
    </div>
  );
};

export default GreetingCard;