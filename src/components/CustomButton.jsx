import React from 'react';

const CustomButton = ({ title, loading, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3 rounded-lg  transition-colors duration-300 ${
        loading
          ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
          : 'bg-black text-white hover:bg-white hover:text-black hover:border'
      }`}
    >
      {loading ? 'Loading...' : title}
    </button>
  );
};

export default CustomButton;