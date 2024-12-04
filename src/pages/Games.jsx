import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Header';
import GamingStatus from '../components/GamingStatus';
import AvailableGames from '../components/AvailableGames';



const GamePage = () => {

    const gamingStatus = [
        { id: 1, title: 'Console 1', description: 'PlayStation 5', status: 'Free', players: 4, location: 'Corner A' },
        { id: 2, title: 'Console 2', description: 'Xbox Series X', status: 'Occupied', players: 2, location: 'Corner B' },
      ];
    
      const availableGames = [
        { id: 1, title: 'Fc25', description: 'Football simulation game', status: 'Available', image: 'https://www.lotkeys.com/uploads/blog/blog11-Kpbh.png.webp' },
        { id: 2, title: 'Call of Duty: Warzone', description: 'Battle royale game', status: 'Available', image: 'https://upload.wikimedia.org/wikipedia/en/4/49/Call_of_Duty_Warzone_2.0_Cover.png' },
        { id: 3, title: 'The Last of Us Part II', description: 'Action-adventure game', status: 'Occupied', image: 'https://assetsio.gnwcdn.com/TLOUP-SITE.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp' },
        { id: 4, title: 'Cyberpunk 2077', description: 'Open-world RPG', status: 'Available', image: 'https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/12aaa3b137a18e180bb92682e8f81674dcb7451f-1920x1080.jpg' },
        { id: 5, title: 'FC24', description: 'Football simulation game', status: 'Available', image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2195250/f11315d7491f706b09b059d12424f711e9778b82/capsule_616x353.jpg?t=1730826798' },
      ];
  return (
    <div className="flex bg-[#141414]">
      <Sidebar />
      <div className="flex-1 lg:ml-64">
        <div className="mt-[70px]">
          <Navbar />
        </div>
        <main className="p-6 pt-2">
        <GamingStatus games={gamingStatus} />
        <AvailableGames games={availableGames} />
        </main>
      </div>
    </div>
  );
};

export default GamePage;