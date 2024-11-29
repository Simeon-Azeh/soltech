import React from 'react';

const ServiceHero = ({ title, backgroundImage }) => {
  return (
    <div
      className="relative w-screen h-64 bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
      </div>
    </div>
  );
};

export default ServiceHero;