import React from 'react';
import './index.css';

import { IoMdSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
        <header>
          <div>
          
          <input type="text" placeholder="Search" className="search-bar" /><IoMdSearch className="searchbutton" />

          </div>
          
          <div className="user-info">
            <div>
            <GoBell className='factoryicons'/>
            <CgProfile className='factoryicons'/>
            </div>
            <div>
            <p>Mabroukie Factory</p>
            <p>mabroukie@gmail.com</p>
            </div>
          </div>
        </header>
  );
}

export default Header;