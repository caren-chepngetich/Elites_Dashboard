import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './LandingPage';
import { Signup } from './SignUp/styles';
import { Login } from './Login/login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        {/* <Route path='' */}
        
      </Routes>
    </Router>
  );
}

export default App;
