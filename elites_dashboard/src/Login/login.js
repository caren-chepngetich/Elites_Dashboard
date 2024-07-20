import styles from './login.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
// import { FcGoogle } from "react-icons/fc";



 export const Login = () => {

    return (
        <div className={styles.logincontainer}>
            <div className={styles.container}>
                <h2 className={styles.dashboardtext}>Easy to use Dashboard</h2>
            </div>
            
            <div className={styles.loginContainer}>
                <h1>Sign in</h1><br />
                
                <form className={styles.credentials}>
                    <label>Email Address</label>
                    {/* <br /><br /> */}
                    <input type='email' name='email' placeholder='Enter Your Email' className={styles.input}  required/>
                    <br /><br />
                    
                    <label>Password</label>
                    {/* <br /><br /> */}
                    <input type='password' name='password' placeholder='Enter Password' className={styles.input} required />
                    <br /><br />
                    
                    <button type="submit" className={styles.signinbtn}>Sign In</button>
                    
                    <p className={styles.signupcall}>
                        Not registered?{' '}
                        <Link to="/signup">Sign Up</Link>
                    </p>
                </form>
                
               
            </div>
        </div>
    );
};

export default Login;

