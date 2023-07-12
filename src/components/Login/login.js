


import React, { useState } from 'react';
// import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import './login.css'; 
import back from '../assets/back.jpg';

const LoginForm = () => {

  <img src={back} height={100} width={50}></img>

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password');
    } else {
      // Proceed with login logic
      setError('');
      // Call login API or perform authentication logic
    }
  };

  return (
    <div className="row">
     
      {error && <p>{error}</p>}
      <form className='login-form' onSubmit={handleSubmit}>
      <h1 className="text-center">Login</h1>
      <hr/>
        <div className="row">
        <div className="col-md-6">
          <label htmlFor="username"className='pull-left'>Username:</label>
          <input
            type="text"
            id="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
     <div>
          <label htmlFor="password"className="pull-left">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        
        <br/>
        <div className="noaccount">
          <h6>  "Don't have an account?" 
          <a className="anotheroption" href="register">  Sign-up</a>
          </h6>
          
          
        </div>
       
<div className="alternateoption">

  <span>Or</span>
</div>

       
        <div className="social-icons">


        <button type="button" class="login-with-google-btn" >
  Continue with Google</button>


        
          {/* <FaGoogle className="social-icon" /> */}


          
          <FaLinkedin className="social-icon" />
          <FaFacebook className="social-icon" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
