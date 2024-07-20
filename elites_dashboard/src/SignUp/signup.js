import './styles.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function SignUp() {
    // const navigate = useNavigate();

    // const handleButtonClick = () => {
    //     navigate('/login');
    // };

    return (
        <div className='container'>
            <div className='signup-container'>
                <h3 id='signuptext'>Create An Account with us</h3>
               
                <p className='headings'>Enter your factory name</p>
                <input type="text" name="text" placeholder="factory name" className="input" required/>

                <p className='headings'>Enter your email address</p>
                <input type="email" name='email' placeholder="Email address" className="input" required/>

                <p className='headings'>Enter your registration number</p>            
                <input type="text" name="registrationNumber" placeholder="Registration Number" className="input"required/>

                <p className='headings'>Enter your password</p>
                <input type="password" name="password" placeholder="Password" className='input'/>

                <p className='headings'>Confirm your password</p>
                <input type="password" name="confirmPassword" placeholder="Re-enter your password to confirm" className='input' required/><br></br>

                <button id='signup'>Sign Up</button>
                <p>Already have an account? 
                <Link to="/login">Login</Link></p>
            </div>

            < div className='termstext'>
                <div>
                    <input type='checkbox' id='checkbox'/>
                </div>

                <div>
                    <p id='termsagree'>By clicking sign up, you agree to our terms and conditions</p>
                </div>
            </div>

            <div className='image'>
                {/* <img src="/Images/teafarmer.jpg" alt="umuhinzi logo" className='logoimage'/> */}
                {/* <img src="/images/eliteslogo.png" alt='umuhinzilogo' /> */}
            </div>         
        </div>
    );
}





