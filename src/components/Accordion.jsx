import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-4 mb-4 border-b border-gray-400">
      <button
        className="flex items-center justify-between w-full py-2 text-left text-gray-800 focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className='font-medium'>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="py-2 text-gray-600">{content}</div>}
    </div>
  );
};

export default Accordion;