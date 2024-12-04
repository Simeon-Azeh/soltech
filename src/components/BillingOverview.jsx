import React, { useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import { db } from '../firebase';
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { Modal, Button } from 'antd';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import dayjs from 'dayjs';

const BillingOverview = () => {
  const [balanceDue, setBalanceDue] = useState(0);
  const [serviceCredits, setServiceCredits] = useState(0);
  const [email, setEmail] = useState('');
  const [soltechID, setSoltechID] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSoltechIDVisible, setIsSoltechIDVisible] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
          setEmail(user.email);
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setSoltechID(userDoc.data().soltechID);
          }
        } else {
          message.error("No authenticated user.");
        }
      } catch (error) {
        console.error("Error fetching user details:", error.message);
        message.error(`Error: ${error.message}`);
      }
    };

    const fetchUserSubscriptions = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
          const q = query(collection(db, "subscriptions"), where("email", "==", user.email), where("paid", "==", false));
          const querySnapshot = await getDocs(q);
          let totalBalance = 0;
          let totalCredits = 0;
          let latestSubscriptionDate = null;
          querySnapshot.forEach((doc) => {
            const subscription = doc.data();
            const subscribedDate = dayjs(subscription.subscribed);
            if (!latestSubscriptionDate || subscribedDate.isAfter(latestSubscriptionDate)) {
              latestSubscriptionDate = subscribedDate;
            }
            switch (subscription.plan) {
              case 'basic':
                totalBalance += 15000;
                totalCredits += 250;
                break;
              case 'pro':
                totalBalance += 25000;
                totalCredits += 500;
                break;
              case 'premium':
                totalBalance += 50000;
                totalCredits += 1000;
                break;
              default:
                break;
            }
          });
          setBalanceDue(totalBalance);
          setServiceCredits(totalCredits);
          if (latestSubscriptionDate) {
            setBillingPeriod(`${latestSubscriptionDate.format('MMM DD')} - ${latestSubscriptionDate.add(1, 'month').format('MMM DD')}`);
            setDueDate(latestSubscriptionDate.add(1, 'month').format('MMM DD'));
          }
        } else {
          message.error("No authenticated user.");
        }
      } catch (error) {
        console.error("Error fetching subscriptions:", error.message);
        message.error(`Error: ${error.message}`);
      }
    };

    fetchUserDetails();
    fetchUserSubscriptions();
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const toggleSoltechIDVisibility = () => {
    setIsSoltechIDVisible(!isSoltechIDVisible);
  };

  return (
    <div className="mt-5 space-y-4 rounded-md">
      <div className="p-6 bg-[#282828] rounded-lg shadow-md">
        <h2 className="mb-4 text-sm font-medium text-white">Balance Due</h2>
        <p className="text-2xl font-semibold text-slate-100">XAF {balanceDue}</p>
        <Button className="px-4 py-4 mt-4 font-medium text-black bg-white rounded-lg font-general" onClick={showModal}>Make Payment</Button>
      </div>
      <div className="p-6 bg-[#282828] rounded-lg shadow-md">
        <h2 className="mb-4 text-sm font-medium text-white">Service Credits</h2>
        <p className="text-2xl font-semibold text-slate-100">XAF {serviceCredits}</p>
        <p className='my-2 text-xs text-slate-100'>This is your loyalty credit and will be applied on your next billing. Thank you for being a valued customer</p>
      </div>
      <div className="p-6 bg-[#282828] rounded-lg shadow-md">
        <h2 className="mb-4 text-sm font-medium text-white">Payment Method</h2>
        <p className="text-sm text-gray-300">Pay at desk</p>
        <Button className="px-4 py-2 mt-4 font-medium text-black bg-white rounded-md font-general">Edit</Button>
      </div>
      <div className="p-6 bg-[#282828] rounded-lg shadow-md">
        <h2 className="mb-4 text-sm font-medium text-white">Current Billing Cycle:</h2>
        <p className="text-sm text-gray-300">Billing Period: <span className='text-lg font-medium'>{billingPeriod}</span> </p>
        <p className="text-sm text-gray-300">Due date: <span className='text-lg font-medium'>{dueDate}</span> </p>
      </div>
      <div className="p-6 bg-[#282828] rounded-lg shadow-md">
        <h2 className="mb-4 text-sm font-medium text-white">Soltech ID</h2>
        <div className="flex items-center">
          <p className="text-2xl font-semibold text-slate-100">{isSoltechIDVisible ? soltechID : '***********'}</p>
          <Button type="link" onClick={toggleSoltechIDVisibility} className="ml-2 text-white">
            {isSoltechIDVisible ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </Button>
        </div>
        <p className='my-2 text-xs text-slate-100'>Your Soltech ID can be used for various services and benefits within our platform. Keep it safe and use it to access exclusive features.</p>
      </div>

      <Modal title="Payment Alert" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className=''>
        <p className='font-medium font-general'>Please pay at the desk as we do not accept automated payments yet.</p>
      </Modal>
    </div>
  );
};

export default BillingOverview;