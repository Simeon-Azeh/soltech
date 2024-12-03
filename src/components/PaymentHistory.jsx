import React from 'react';
import { PiDownloadLight } from "react-icons/pi";

const PaymentHistory = () => {
  const statements = [
    { date: '2023-01-15', balanceDue: 'XAF 120,000', total: 'XAF 150,000' },
    { date: '2023-02-15', balanceDue: 'XAF 100,000', total: 'XAF 130,000' },
  ];

  const payments = [
    { date: '2023-01-20', amount: 'XAF 120,000', method: 'Visa ending in 1234' },
    { date: '2023-02-20', amount: 'XAF 100,000', method: 'Visa ending in 1234' },
  ];

  const credits = [
    { date: '2023-01-25', amount: 'XAF 30,000', description: 'Service Credit' },
    { date: '2023-02-25', amount: 'XAF 20,000', description: 'Promotional Credit' },
  ];

  return (
    <div className="mt-6 space-y-6">
      <div className="p-6 bg-[#282828] rounded-lg shadow-md">
        <h2 className="text-lg font-medium text-white">Statement History</h2>
        <table className="w-full mt-4 text-white">
          <thead>
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
          <thead>
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
        <h2 className="text-lg font-medium text-white">Credits Granted</h2>
        <table className="w-full mt-4 text-white">
          <thead>
            <tr>
              <th className="px-4 py-2 font-medium text-left">Credit Date</th>
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