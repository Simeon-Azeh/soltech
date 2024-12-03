import React, { useState, useEffect } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { Menu, Dropdown, Avatar, Button, Drawer } from 'antd';
import { BellOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';
import { FaChalkboardTeacher, FaGamepad, FaLaptopHouse, FaBell, FaCogs } from 'react-icons/fa';
import { IoChevronDown } from "react-icons/io5";
import { LayoutDashboard, Cpu, Gamepad2, MonitorCog, Bell, Settings } from 'lucide-react';
const Navbar = () => {
  const [userName, setUserName] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchUserName = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserName(userDoc.data().name);
        }
      }
    };

    fetchUserName();
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  const handleLogout = () => {
    auth.signOut();
    closeDrawer();
  };

  const menu = (
    <Menu>
      <Menu.Item key="0" icon={<UserOutlined />}>
        <a href="/profile">Profile</a>
      </Menu.Item>
      <Menu.Item key="1" icon={<SettingOutlined />}>
        <a href="/settings">Settings</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  const drawerContent = (
    <nav className="flex flex-col justify-between h-full mt-6 text-white bg-[#282828]">
      <ul className="space-y-4">
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'block px-6 py-3 bg-gray-700 text-white' : 'block px-6 py-3 hover:bg-gray-700 hover:text-white'} onClick={closeDrawer}>
            <LayoutDashboard className="inline-block mr-3" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/tech" className={({ isActive }) => isActive ? 'block px-6 py-3 bg-gray-700 text-white' : 'block px-6 py-3 hover:bg-gray-700 hover:text-white'} onClick={closeDrawer}>
            <Cpu className="inline-block mr-3" /> Tech Training
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/gaming" className={({ isActive }) => isActive ? 'block px-6 py-3 bg-gray-700 text-white' : 'block px-6 py-3 hover:bg-gray-700 hover:text-white'} onClick={closeDrawer}>
            <Gamepad2 className="inline-block mr-3" /> Gaming
          </NavLink>
        </li>
        <li>
          <NavLink to="/workspaces" className={({ isActive }) => isActive ? 'block px-6 py-3 bg-gray-700 text-white' : 'block px-6 py-3 hover:bg-gray-700 hover:text-white'} onClick={closeDrawer}>
            <FaLaptopHouse className="inline-block mr-3" /> Workspaces
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications" className={({ isActive }) => isActive ? 'block px-6 py-3 bg-gray-700 text-white' : 'block px-6 py-3 hover:bg-gray-700 hover:text-white'} onClick={closeDrawer}>
            <FaBell className="inline-block mr-3" /> Notifications
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={({ isActive }) => isActive ? 'block px-6 py-3 bg-gray-700 text-white' : 'block px-6 py-3 hover:bg-gray-700 hover:text-white'} onClick={closeDrawer}>
            <FaCogs className="inline-block mr-3" /> Settings
          </NavLink>
        </li>
      </ul>
      <div className="px-6 py-3 mt-6 text-white bg-gray-700 cursor-pointer hover:bg-gray-600" onClick={handleLogout}>
        <LogoutOutlined className="inline-block mr-3" /> Logout
      </div>
    </nav>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-6 py-4 bg-[#282828] md:left-64 md:w-[calc(100%-16rem)]">
        <div className="flex items-center gap-4">
          <Button className="lg:hidden" type="primary" icon={<FaBars />} onClick={showDrawer} />
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 text-sm text-gray-300 bg-[#1c1c1c] border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="flex items-center gap-6">
          <BellOutlined className="text-lg text-gray-300 cursor-pointer hover:text-blue-500" />
          <Dropdown overlay={menu} trigger={['click']}>
            <div className="flex items-center gap-2 cursor-pointer">
              <Avatar icon={<UserOutlined />} />
              <span className="items-center hidden gap-2 text-gray-300 md:flex">{userName} <IoChevronDown /></span>
            </div>
          </Dropdown>
        </div>
      </header>
      <Drawer title="Soltech" placement="left" onClose={closeDrawer} visible={visible}>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;