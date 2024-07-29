import styles from './login.module.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid";
        }
        
        if (!formData.password) {
            errors.password = "Password is required";
        } else if (formData.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form is valid", formData);
        } else {
            console.log("Form is invalid");
        }
    };

    return (
        <div className={styles.logincontainer}>
            <div className={styles.container}>
                {/* <h2 className={styles.dashboardtext}>Easy to use Dashboard</h2> */}
            </div>
            
            <div className={styles.loginContainer}>
                <h1>Sign in</h1><br />
                
                <form className={styles.credentials} onSubmit={handleSubmit}>
                    <label>Email Address</label>
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='Enter Your Email' 
                        className={`${styles.input} ${formErrors.email ? styles.inputError : ''}`}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.email && <p className={styles.errorText}>{formErrors.email}</p>}
                    <br></br>
                    <br></br>
                    
                    <label>Password</label>
                    <input 
                        type='password' 
                        name='password' 
                        placeholder='Enter Password' 
                        className={`${styles.input} ${formErrors.password ? styles.inputError : ''}`}
                        value={formData.password}
                        onChange={handleChange}
                        required 
                    />
                    {formErrors.password && <p className={styles.errorText}>{formErrors.password}</p>}
                    <br />
                    
                    <button type="signinbtn" className={styles.signinbtn}>Sign In</button>
                    
                    <p className={styles.signupcall}>
                        Not registered?{' '}
                        <Link to="/signup" style={{ textDecoration: 'none' }} className='sign'>Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;