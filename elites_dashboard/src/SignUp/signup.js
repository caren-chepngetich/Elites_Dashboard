import './styles.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function SignUp() {

    // const 
    const navigate = useNavigate();

    // const handleSignup = () => {
    //     navigate('/login');
    // };

    const [formData, setFormData] = useState({
        factoryName: '',
        email: '',
        registrationNumber:'',
        password: '',
        confirmPassword: ''
    });

    const [formErrors, setFormErrors] = useState({});
    // const [setIsFormValid] = useState(false);
    // const [termsAccepted, setTermsAccepted] = useState(false);

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    };

    // const handleCheckboxChange = (e) => {
    //     setTermsAccepted(e.target.checked);
    // };

    const handleButtonClick = () => {
        const errors = {};
        let isValid = true;

        if (!formData.factoryName.trim()) {
            errors.factoryName = "Factory name is required";
            isValid = false;
        }

        if (!validateEmail(formData.email)) {
            errors.email = "Invalid email address";
            isValid = false;
        }

        if (!formData.registrationNumber.trim()) {
            errors.registrationNumber = "Registration number is required";
            isValid = false;
        }

        if (!validatePassword(formData.password)) {
            errors.password = "Password must be at least 8 characters long";
            isValid = false;
        }

        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
            isValid = false;
        }

        // if (!termsAccepted) {
        //     errors.terms = "You must accept the terms and conditions";
        //     isValid = false;
        // }

        setFormErrors(errors);
        // setIsFormValid(isValid);

        if (isValid) {
            navigate('/login');
        }
    };


    return (
        <div className='container'>
            <div className='signup-container'>
                <h3 id='signuptext'>Create An Account with us</h3>
               
               <label className='headings'>Enter your factory name </label>
               {/* <br></br> 
               <br></br> */}
               <input
                type="text" 
                name="factoryName"                 
                placeholder="Factory name" 
                className={`input ${formErrors.factoryName ? 'input-error' : ''}`} 
                required
                onChange={handleInputChange}
                />
               <br></br>
               <br></br>
               {formErrors.factoryName && <p className="error-message">{formErrors.factoryName}</p>}

{/* <div className='input-container'> */}
<label className='headings'>Enter your email address</label> 
              {/* <br></br>
              <br></br> */}

                <input 
                type="email" 
                name='email'                
                placeholder="Email address"
                className={`input ${formErrors.email ? 'input-error' : ''}`}
                required
                onChange={handleInputChange}
                  />
                {/* <br></br>
                <br></br> */}
                {formErrors.email && <p className="error-message">{formErrors.email}</p>}             
                <br></br>
                <br></br>
                <label className='headings'>Enter your registration number</label>            
                <input
                    type="text"
                    name="registrationNumber"
                    placeholder="Registration Number"
                    className={`input ${formErrors.registrationNumber ? 'input-error' : ''}`}
                    required
                    onChange={handleInputChange}
                />
                <br></br>
                <br></br>
                {formErrors.registrationNumber && <p className="error-message">{formErrors.registrationNumber}</p>}

                <label className='headings'>Enter your password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`input ${formErrors.password ? 'input-error' : ''}`}
                    onChange={handleInputChange}
                />
                <br></br>
                <br></br>
                {formErrors.password && <p className="error-message">{formErrors.password}</p>}

                <label className='headings'>Confirm your password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Re-enter your password to confirm"
                    className={`input ${formErrors.confirmPassword ? 'input-error' : ''}`}
                    required
                    onChange={handleInputChange}
                />
                {/* <br></br>
                <br></br> */}
                {formErrors.confirmPassword && <p className="error-message">{formErrors.confirmPassword}</p>}

                <div className='termstext'>
                    <input 
                    type='checkbox'
                    id='checkbox'
                    // onChange={handleCheckboxChange}
                    className={formErrors.terms ? 'checkbox-error' : ''}
                    />

                    <label id='termsagree'>By clicking sign up, you agree to our terms and conditions</label>

                    </div>
                    {formErrors.terms && <p className="error-message">{formErrors.terms}</p>}


                <button id='signupbtn' onClick={handleButtonClick}> Sign Up</button>
                <div id='custom-acc'>
                <p id='login-btn'>Already have an account? 
                       <Link to="/login">Login</Link></p>
                 </div>
            </div>

            <div className='image'>
                {/* <img src="/Images/teafarmer.jpg" alt="umuhinzi logo" className='logoimage'/> */}
                {/* <img src="/images/eliteslogo.png" alt='umuhinzilogo' /> */}
            </div>         
        </div>
    );
}
