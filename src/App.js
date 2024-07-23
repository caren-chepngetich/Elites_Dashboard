// import logo from './logo.svg';
import './App.css';
import Farmer from './farmer';
import Header from './header';
import Sidebar from './sidebar';

import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <Sidebar />
        <div className="farmer-content">
          <Farmer />
        </div>
      </div>
    </div>
  );
}

export default App;

