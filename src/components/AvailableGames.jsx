import React from 'react';

const AvailableGames = ({ games }) => {
    return (
      <div className="space-y-6">
        <div className="p-6 bg-[#282828] rounded-lg shadow-md mt-5">
          <h2 className="text-lg font-medium text-white">Available Games</h2>
          <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {games.map((game, index) => (
              <div
                key={index}
                className="relative h-[300px] p-4 bg-center bg-cover rounded-lg shadow-md transform transition-transform hover:scale-105"
                style={{ backgroundImage: `url(${game.image})` }}
              >
                <div className="absolute inset-0 bg-black rounded-lg opacity-50"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-medium text-white">{game.title}</h3>
                  <p className="text-sm text-gray-300">{game.description}</p>
                  <div className="flex items-center">
                    <span className={`dot ${game.status === 'Available' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    <p className={`text-sm font-medium ${game.status === 'Available' ? 'text-green-500' : 'text-red-500'}`}>
                      {game.status}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default AvailableGames;