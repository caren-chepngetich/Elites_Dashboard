import React, { useState } from 'react';
import './index.css';
// import { SiWindows } from "react-icons/si";
import { AiFillAppstore } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { BsFileBarGraph } from "react-icons/bs";
import { AiFillDatabase } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <div id="sidebar">
      <div className="logo-container">
        <img src='/Images/logo.png' alt='' className='logo'></img>
      </div>
      <hr className="line" />
      <ul>
        <li className={activeItem === 'Dashboard' ? 'active dashboard' : 'dashboard'} onClick={() => handleItemClick('Dashboard')}>
          <p className='icons'><AiFillAppstore /></p>
          <span>Dashboard</span>
        </li>
        <li className={activeItem === 'Farmers' ? 'active dashboard' : 'dashboard'} onClick={() => handleItemClick('Farmers')}>
          <p className='icons'><IoIosPeople /></p>
          <span>Farmers</span>
        </li>
        <li className={activeItem === 'Analytics' ? 'active dashboard' : 'dashboard'} onClick={() => handleItemClick('Analytics')}>
          <p className='icons'><BsFileBarGraph /></p>
          <span>Analytics</span>
        </li>
        <li className={activeItem === 'Products' ? 'active dashboard' : 'dashboard'} onClick={() => handleItemClick('Products')}>
          <p className='icons'><AiFillDatabase /></p>
          <span>Products</span>
        </li>
        <div className='navigations'>
          <li className={activeItem === 'Settings' ? 'active dashboard' : 'dashboard'} onClick={() => handleItemClick('Settings')}>
            <p className='icons'><IoSettingsSharp /></p>
            <span>Settings</span>
          </li>
          <li className={activeItem === 'Logout' ? 'active dashboard' : 'dashboard'} onClick={() => handleItemClick('Logout')}>
            <p className='icons'><LuLogOut /></p>
            <span>LogOut</span>
          </li>
        </div>
      </ul>
    </div>
  );
};
export default Sidebar












