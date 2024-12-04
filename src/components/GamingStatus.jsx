import React from 'react';
import { FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

const GamingStatus = ({ games }) => {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-[#282828] rounded-lg shadow-md">
        <h2 className="text-lg font-medium text-white">Gaming Status</h2>
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games.map((game, index) => (
            <div
              key={index}
              className="relative p-4 bg-[#1f1f1f] rounded-lg shadow-md transform transition-transform hover:scale-105"
            >
              <h3 className="font-medium text-white text-md">{game.title}</h3>
              <p className="text-sm text-gray-300">{game.description}</p>
              <div className="flex items-center">
                <span className={`dot ${game.status === 'Free' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <p className={`text-sm font-medium ${game.status === 'Free' ? 'text-green-500' : 'text-red-500'}`}>
                  {game.status}
                </p>
              </div>
              <div className="flex items-center mt-2">
                <FaUsers className="mr-2 text-gray-300" />
                <p className="text-sm text-gray-300">{game.players} players</p>
              </div>
              <div className="flex items-center mt-2">
                <FaMapMarkerAlt className="mr-2 text-gray-300" />
                <p className="text-sm text-gray-300">{game.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamingStatus;