
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
  const [activeItem, setActiveItem] = useState('Dashboard'); // State to track active menu item

  const handleItemClick = (itemName) => {
    setActiveItem(itemName); // Update active item when menu item is clicked
    // You can add logic here to handle what happens when a menu item is clicked, e.g., navigate to a different page
  };

  return (
    <div className="sidebar">
      <div className="logo-container">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <img src='/Images/logo.png' alt='' className='logo'></img>
      </div>
      <hr className="line" />
      <ul>
        <div className='dashboard'>
        <p><AiFillAppstore /></p>
        <li className={activeItem === 'Dashboard' ? 'active' : ''} onClick={() => handleItemClick('Dashboard')}>
          Dashboard
        </li>
        </div>
        <div  className='dashboard'>
        <p><IoIosPeople /></p>
        <li className={activeItem === 'Farmers' ? 'active' : ''} onClick={() => handleItemClick('Farmers')}>
          Farmers
        </li>
        </div>
        <div  className='dashboard'>
            <p><BsFileBarGraph /></p>
        <li className={activeItem === 'Analytics' ? 'active' : ''} onClick={() => handleItemClick('Analytics')}>
          Analytics
        </li>
        </div>
        <div className='dashboard'>
        <p><AiFillDatabase /></p>
        <li className={activeItem === 'Products' ? 'active' : ''} onClick={() => handleItemClick('Products')}>
          Products
        </li>
        </div>
        <div className='navigations'>
        <div  className='dashboard'>
            <p><IoSettingsSharp /></p>
        <li className={activeItem === 'Settings' ? 'active' : ''} onClick={() => handleItemClick('Settings')}>
          Settings
        </li>
        </div>
        <div className='dashboard'>
        <p><LuLogOut /></p>
        <li className={activeItem === 'LogOut' ? 'active' : ''} onClick={() => handleItemClick('Logout')}>
          LogOut
        </li>
        </div>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
