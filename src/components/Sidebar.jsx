import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChalkboardTeacher, FaGamepad, FaLaptopHouse, FaBell, FaCogs } from 'react-icons/fa';
import { LogoutOutlined } from '@ant-design/icons';
import { auth } from '../firebase';
import { LayoutDashboard, Cpu, Gamepad2, MonitorCog, Bell, Settings } from 'lucide-react';

const Sidebar = ({ onClose }) => {
  const handleLogout = () => {
    auth.signOut();
    if (onClose) {
      onClose();
    }
  };

  const sidebarContent = (
    <nav className="flex flex-col justify-between h-full mt-2 bg-[#282828]">
      <ul className="space-y-4 font-medium text-slate-100">
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'block px-6 py-3 bg-[#1b1b1b]' : 'block px-6 py-3 hover:bg-[#1c1c1c]'} onClick={onClose}>
            <LayoutDashboard className="inline-block mr-3" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/tech" className={({ isActive }) => isActive ? 'block px-6 py-3 bg-[#1b1b1b]' : 'block px-6 py-3 hover:bg-[#1c1c1c]'} onClick={onClose}>
            <Cpu className="inline-block mr-3" /> Tech Training
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/gaming" className={({ isActive }) => isActive ? 'block px-6 py-3 bg-[#1b1b1b]' : 'block px-6 py-3 hover:bg-[#1c1c1c]'} onClick={onClose}>
            <Gamepad2 className="inline-block mr-3" /> Gaming
          </NavLink>
        </li>
        <li>
          <NavLink to="/workspaces" className={({ isActive }) => isActive ? 'block px-6 py-3 bg-[#1b1b1b]' : 'block px-6 py-3 hover:bg-[#1c1c1c]'} onClick={onClose}>
            <MonitorCog className="inline-block mr-3" /> Workspaces
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications" className={({ isActive }) => isActive ? 'block px-6 py-3 bg-[#1b1b1b]' : 'block px-6 py-3 hover:bg-[#1c1c1c]'} onClick={onClose}>
            <Bell className="inline-block mr-3" /> Notifications
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={({ isActive }) => isActive ? 'block px-6 py-3 bg-[#1b1b1b]' : 'block px-6 py-3 hover:bg-[#1c1c1c]'} onClick={onClose}>
            <Settings className="inline-block mr-3" /> Settings
          </NavLink>
        </li>
      </ul>
      <div className="px-6 py-3 mt-6 bg-blue-500 cursor-pointer text-slate-100 hover:bg-gray-600" onClick={handleLogout}>
        <LogoutOutlined className="inline-block mr-3" /> Logout
      </div>
    </nav>
  );

  return (
    <aside className="fixed hidden w-64 h-screen bg-[#282828] text-slate-100 lg:block">
      <div className="w-32 h-32 pl-6">
        <img src="/img/soltechwhite_long.png" alt="Soltech Logo" className="object-cover w-full" />
      </div>
      {sidebarContent}
    </aside>
  );
};

export default Sidebar;