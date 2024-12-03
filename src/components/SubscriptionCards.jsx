import React, { useEffect, useState } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { MoreOutlined, SyncOutlined, ArrowUpOutlined, CloseOutlined } from '@ant-design/icons';
import { FaWifi, FaGamepad, FaLaptopHouse } from 'react-icons/fa';
import dayjs from 'dayjs';
import { db } from '../firebase'; // Corrected import

const SubscriptionCards = ({ userName }) => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [userSubscriptions, setUserSubscriptions] = useState([]);

  useEffect(() => {
    // Fetch user subscriptions from Firestore
    const fetchUserSubscriptions = async () => {
      const userSubRef = db.collection('subscriptions').doc(userName);
      const doc = await userSubRef.get();
      if (doc.exists) {
        setUserSubscriptions(doc.data().subscriptions);
      }
    };

    fetchUserSubscriptions();
  }, [userName]);

  const defaultSubscriptions = [
    { id: 'internet', type: 'Internet', color: 'bg-[#282828]', icon: <FaWifi /> },
    { id: 'gaming', type: 'Gaming', color: 'bg-[#282828]', icon: <FaGamepad /> },
    { id: 'workspace', type: 'Workspace', color: 'bg-[#282828]', icon: <FaLaptopHouse /> },
  ];

  const calculateRemainingDays = (expires) => {
    const today = dayjs();
    const expirationDate = dayjs(expires);
    return expirationDate.diff(today, 'day');
  };

  const handleSubscribe = async (sub) => {
    const newSubscription = {
      ...sub,
      subscribed: dayjs().format('YYYY-MM-DD'),
      expires: dayjs().add(30, 'day').format('YYYY-MM-DD'),
    };

    const updatedSubscriptions = [...userSubscriptions, newSubscription];
    setUserSubscriptions(updatedSubscriptions);

    await db.collection('subscriptions').doc(userName).set({
      subscriptions: updatedSubscriptions,
    });
  };

  const menu = (
    <Menu>
      <Menu.Item key="0" icon={<SyncOutlined />}>
        <a href="#">Renew</a>
      </Menu.Item>
      <Menu.Item key="1" icon={<ArrowUpOutlined />}>
        <a href="#">Upgrade</a>
      </Menu.Item>
      <Menu.Item key="2" icon={<CloseOutlined />}>
        <a href="#">Cancel</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {defaultSubscriptions.map((sub) => {
        const userSub = userSubscriptions.find((us) => us.id === sub.id);
        return (
          <div key={sub.id} className={`relative p-6 rounded-lg shadow-md ${sub.color}`}>
            <div className="absolute top-2 right-2">
              <Dropdown overlay={menu} trigger={['click']}>
                <MoreOutlined className="text-white cursor-pointer" />
              </Dropdown>
            </div>
            <div className="flex items-center mb-4">
              <div className="mr-3 text-2xl text-white">{sub.icon}</div>
              <h2 className="text-lg font-medium text-white">{sub.type} Subscription</h2>
            </div>
            {userSub ? (
              <>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-white">Subscribed: {userSub.subscribed}</p>
                  <p className="text-white">|</p>
                  <p className="text-sm text-white">Expires: {userSub.expires}</p>
                </div>
                <p className="text-sm text-white">Remaining Days: <span className="text-xl font-medium">{calculateRemainingDays(userSub.expires)}</span></p>
              </>
            ) : (
              <Button type="primary" onClick={() => handleSubscribe(sub)}>Subscribe</Button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SubscriptionCards;