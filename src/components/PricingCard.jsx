import React from 'react';
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";

const PricingCard = ({ title, price, description, features, unavailableFeatures = [], bestPlan = false }) => {
  return (
    <div className="relative flex flex-col justify-between p-6 duration-150 bg-black border border-white rounded-lg shadow-lg hover:scale-105">
      {bestPlan && (
        <div className="absolute top-0 right-0 px-2 py-1 text-xs font-bold text-black bg-white rounded-bl-lg">
          Best Plan
        </div>
      )}
      <div>
        <h3 className="w-20 px-2 py-1 mb-4 text-xs font-medium text-white bg-gray-800 rounded">{title}</h3>
        <p className="mb-4 text-4xl font-bold text-white">XAF {price}<span className='text-sm font-semibold'>/Mo</span></p>
        <p className="mb-4 text-slate-100">{description}</p>
        <ul className="mb-4 text-sm font-normal text-slate-200">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 mb-2">
              <IoCheckmarkCircle />
              {feature}
            </li>
          ))}
          {unavailableFeatures.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 mb-2 text-red-400">
              <IoCloseCircle />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button className="px-4 py-2 font-medium text-black bg-white rounded-lg hover:scale-105 ">
        Choose
      </button>
    </div>
  );
};

export default PricingCard;