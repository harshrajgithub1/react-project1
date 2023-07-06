import React from "react";
import "./login.css";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Login = () => {
    return(

       <div className="cover">
       <h1>Login</h1>
       <input type="text" placeholder="username"/> 
       <br></br>
       <input type="password" placeholder="password"/>

        
       <div className="login-btn">Login</div>
       <div className="login-btn1">Sign-up</div>
       <p className="text">login by using</p>

       <div style={{cursor:"pointer"}}>
       <FaGoogle style={{marginRight:18}} size={30}/> 
          
          <FaLinkedin style={{marginRight:18}}size={30}/>
          <FaFacebook size={30}/>

       </div>

       </div>

    )
}

export default Login;