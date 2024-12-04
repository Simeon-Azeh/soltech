import React, { useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import { db } from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import { PiDownloadLight } from "react-icons/pi";


const PaymentHistory = () => {
  const [statements, setStatements] = useState([]);
  const [payments, setPayments] = useState([]);
  const [credits, setCredits] = useState([]);
  const [email, setEmail] = useState('');
  const [planOverview, setPlanOverview] = useState({
    internet: { basic: 0, pro: 0, premium: 0 },
    gaming: { basic: 0, pro: 0, premium: 0 },
    workspace: { basic: 0, pro: 0, premium: 0 },
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
          setEmail(user.email);

          // Fetch subscriptions
          const subscriptionsQuery = query(collection(db, "subscriptions"), where("email", "==", user.email));
          const subscriptionsSnapshot = await getDocs(subscriptionsQuery);
          const subscriptionsData = subscriptionsSnapshot.docs.map(doc => doc.data());

          // Separate unpaid and paid subscriptions
          const unpaidSubscriptions = subscriptionsData.filter(sub => !sub.paid);
          const paidSubscriptions = subscriptionsData.filter(sub => sub.paid);

          // Map unpaid subscriptions to statements
          const statementsData = unpaidSubscriptions.map(sub => ({
            date: sub.subscribed,
            balanceDue: sub.plan === 'basic' ? 15000 : sub.plan === 'pro' ? 25000 : 50000,
            total: sub.plan === 'basic' ? 15000 : sub.plan === 'pro' ? 25000 : 50000,
          }));

          // Map paid subscriptions to payments
          const paymentsData = paidSubscriptions.map(sub => ({
            date: sub.subscribed,
            amount: sub.plan === 'basic' ? 15000 : sub.plan === 'pro' ? 25000 : 50000,
            method: 'Pay at desk',
          }));

          setStatements(statementsData);
          setPayments(paymentsData);

          // Calculate service credits
          const creditsData = subscriptionsData.map(sub => ({
            date: sub.subscribed,
            amount: sub.plan === 'basic' ? 250 : sub.plan === 'pro' ? 500 : 1000,
            description: 'Service Credit',
          }));
          setCredits(creditsData);

          // Calculate plan overview
          const planOverviewData = {
            internet: { basic: 0, pro: 0, premium: 0 },
            gaming: { basic: 0, pro: 0, premium: 0 },
            workspace: { basic: 0, pro: 0, premium: 0 },
          };

          subscriptionsData.forEach(sub => {
            if (sub.type === 'Internet') {
              planOverviewData.internet[sub.plan]++;
            } else if (sub.type === 'Gaming') {
              planOverviewData.gaming[sub.plan]++;
            } else if (sub.type === 'Workspace') {
              planOverviewData.workspace[sub.plan]++;
            }
          });

          setPlanOverview(planOverviewData);
        } else {
          message.error("No authenticated user.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
        message.error(`Error: ${error.message}`);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="mt-6 space-y-6">
    
      <div className="p-6 bg-[#282828] rounded-lg shadow-md">
        <h2 className="text-lg font-medium text-white">Statement History</h2>
        <table className="w-full mt-4 text-white">
          <thead className="border-b border-gray-500">
            <tr>
              <th className="px-4 py-2 font-medium text-left">Invoice Date</th>
              <th className="px-4 py-2 font-medium text-left">Balance Due</th>
              <th className="px-4 py-2 font-medium text-left">Total</th>
              <th className="px-4 py-2 font-medium text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {statements.map((statement, index) => (
              <tr key={index} className="hover:bg-gray-700">
                <td className="px-4 py-2 ">{statement.date}</td>
                <td className="px-4 py-2">{statement.balanceDue}</td>
                <td className="px-4 py-2">{statement.total}</td>
                <td className="px-4 py-2">
                  <button className="px-4 py-2 text-white "><PiDownloadLight size={24} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-6 bg-[#282828] rounded-lg shadow-md">
        <h2 className="text-lg font-medium text-white">Payment History</h2>
        <table className="w-full mt-4 text-white">
          <thead className="border-b border-gray-500">
            <tr>
              <th className="px-4 py-2 font-medium text-left">Payment Date</th>
              <th className="px-4 py-2 font-medium text-left">Amount</th>
              <th className="px-4 py-2 font-medium text-left">Method</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index} className="hover:bg-gray-700">
                <td className="px-4 py-2">{payment.date}</td>
                <td className="px-4 py-2">{payment.amount}</td>
                <td className="px-4 py-2">{payment.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-6 bg-[#282828] rounded-lg shadow-md">
        <h2 className="text-lg font-medium text-white">Service Credits Granted</h2>
        <table className="w-full mt-4 text-white">
          <thead className="border-b border-gray-500">
            <tr>
              <th className="px-4 py-2 font-medium text-left">Subscription Date</th>
              <th className="px-4 py-2 font-medium text-left">Amount</th>
              <th className="px-4 py-2 font-medium text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {credits.map((credit, index) => (
              <tr key={index} className="hover:bg-gray-700">
                <td className="px-4 py-2">{credit.date}</td>
                <td className="px-4 py-2">{credit.amount}</td>
                <td className="px-4 py-2">{credit.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;