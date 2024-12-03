import React from 'react';

const BillingOverview = () => {
  return (
    <div className="mt-5 space-y-4 rounded-md">
      <div className="p-6 bg-[#282828] rounded-lg shadow-md">
        <h2 className="mb-4 text-sm font-medium text-white">Balance Due</h2>
        <p className="text-2xl font-semibold text-slate-100">XAF 0</p>
        <button className="px-4 py-2 mt-4 text-black bg-white rounded-lg ">Make Payment</button>
      </div>
      <div className="p-6 bg-[#282828] rounded-lg shadow-md">
        <h2 className="mb-4 text-sm font-medium text-white">Service Credits</h2>
        <p className="text-2xl font-semibold text-slate-100">XAF 11,500</p>
        <p className='my-2 text-xs text-slate-100'>This is your loyalty credit and will be applied on your next billing. Thank you for being a valued customer</p>
      </div>
      <div className="p-6 bg-[#282828] rounded-lg shadow-md">
        <h2 className="mb-4 text-sm font-medium text-white">Payment Method</h2>
        <p className="text-sm text-gray-300">Visa ending in **1234</p>
        <button className="px-4 py-2 mt-4 text-black bg-white rounded-md">Edit</button>
      </div>
      <div className="p-6 bg-[#282828] rounded-lg shadow-md">
        <h2 className="mb-4 text-sm font-medium text-white">Current Billing Cycle:</h2>
        <p className="text-sm text-gray-300">Billing Period: <span className='text-lg font-medium'>Nov 15 - Dec 14</span> </p>
        <p className="text-sm text-gray-300">Due date: <span className='text-lg font-medium'>Dec 15</span> </p>
      </div>
     
    </div>
  );
};

export default BillingOverview;