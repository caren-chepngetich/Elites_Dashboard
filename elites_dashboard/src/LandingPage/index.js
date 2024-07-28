import React from "react";
import "./index.css";
import { useNavigate }from 'react-router-dom';

function Home(){
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/signup');
    };

    return(
        <div className="home-container">
            <div className="content">

           <h1>Welcome to Umuhinzi Admin Dashboard</h1>
           <h3>For easy management of factroy records</h3>
           <button id="getstartedbtn"onClick={handleButtonClick}>Get started</button>
        
            </div>
          
        </div>
    )
}

export default Home;