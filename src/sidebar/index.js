import React, { useState } from 'react';
import './index.css';
import { MdDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdAnalytics } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo">Umuhinzi</div>
        <nav>
          <ul>
            <div className='dashboard'>
              <MdDashboard className='dashboardicon'/>
              <li>Dashboard</li>
            </div>
            <br/>
            <div className='farm'>
              <IoIosPeople className="farmicon"/>
              <li>Farmers</li>
            </div>
            <br/>
            <div className='analytics'>
              <MdAnalytics className='analyticsicon'/>
              <li>Analytics</li>
            </div>
            <br/>
            <div className='product'>
              <AiFillProduct className='producticon'/>
              <li>Products</li>
            </div>
          </ul>
        </nav>
        <div className="settings-logout">
          <button>Settings</button>
          <button>Logout</button>
        </div>
      </div>
      <div className="menu-button" onClick={toggleSidebar}>
        ☰
      </div>
    </>
  );
}

export default Sidebar;
