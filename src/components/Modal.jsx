import React from 'react';

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <button className="absolute text-gray-500 top-4 right-4" onClick={onClose}>
          &#x2715;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
