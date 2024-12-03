import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChalkboardTeacher, FaGamepad, FaLaptopHouse, FaBell, FaCogs } from 'react-icons/fa';
import { LogoutOutlined } from '@ant-design/icons';
import { auth } from '../firebase';

const Sidebar = ({ onClose }) => {
  const handleLogout = () => {
    auth.signOut();
    if (onClose) {
      onClose();
    }
  };

  const sidebarContent = (
    <nav className="flex flex-col justify-between h-full mt-2">
      <ul className="space-y-4 font-medium text-gray-800">
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'block px-6 py-3 bg-blue-100' : 'block px-6 py-3 hover:bg-slate-100'} onClick={onClose}>
            <FaChalkboardTeacher className="inline-block mr-3" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/tech" className={({ isActive }) => isActive ? 'block px-6 py-3 bg-blue-100' : 'block px-6 py-3 hover:bg-slate-100'} onClick={onClose}>
            <FaChalkboardTeacher className="inline-block mr-3" /> Tech Training
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/gaming" className={({ isActive }) => isActive ? 'block px-6 py-3 bg-blue-100' : 'block px-6 py-3 hover:bg-slate-100'} onClick={onClose}>
            <FaGamepad className="inline-block mr-3" /> Gaming
          </NavLink>
        </li>
        <li>
          <NavLink to="/workspaces" className={({ isActive }) => isActive ? 'block px-6 py-3 bg-blue-100' : 'block px-6 py-3 hover:bg-slate-100'} onClick={onClose}>
            <FaLaptopHouse className="inline-block mr-3" /> Workspaces
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications" className={({ isActive }) => isActive ? 'block px-6 py-3 bg-blue-100' : 'block px-6 py-3 hover:bg-slate-100'} onClick={onClose}>
            <FaBell className="inline-block mr-3" /> Notifications
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={({ isActive }) => isActive ? 'block px-6 py-3 bg-blue-100' : 'block px-6 py-3 hover:bg-slate-100'} onClick={onClose}>
            <FaCogs className="inline-block mr-3" /> Settings
          </NavLink>
        </li>
      </ul>
      <div className="px-6 py-3 mt-6 text-white bg-blue-500 cursor-pointer hover:bg-gray-600" onClick={handleLogout}>
        <LogoutOutlined className="inline-block mr-3" /> Logout
      </div>
    </nav>
  );

  return (
    <aside className="fixed hidden w-64 h-screen text-white bg-white lg:block">
      <div className="w-32 h-32 pl-6">
        <img src="/img/soltechblue_long.png" alt="Soltech Logo" className="object-cover w-full" />
      </div>
      {sidebarContent}
    </aside>
  );
};

export default Sidebar;