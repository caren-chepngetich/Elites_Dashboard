import React from "react";
import "./index.css";
import { useNavigate }from 'react-router-dom';
// import teafarmer from '../Images/teafarmer.jpg';

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
           {/* <Link to="/signup"> */}
           <button id="getstartedbtn" onClick={handleButtonClick}>Get started</button>
           {/* </Link> */}
          
            </div>
          
        </div>
    )
}

export default Home;