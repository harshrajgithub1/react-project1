// import React,{useState} from "react";
// import "./login.css";
// import { FaGoogle } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";


// const Login = () => {
//     return(

//        <div className="cover">
//        <h1>Login</h1>
//        <input type="text" placeholder="username"/> 
//        <br></br>
//        <input type="password" placeholder="password"/>

  
      
//        <button type="submit">Login</button>
       
//        <button type="submit">Sign-up</button>
//        <p className="text">login by using</p>

//        <div style={{cursor:"pointer"}}>
//        <FaGoogle style={{marginRight:18}} size={30}/> 
          
//           <FaLinkedin style={{marginRight:18}}size={30}/>
//           <FaFacebook size={30}/>

//        </div>

//        </div>

//     )
// }

// export default Login;





// import React, { useState } from 'react';
// import { FaGoogle } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";



// const LoginForm = () => {
//   const [username, setUsername] = useState('')    ;
  
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform validation
//     if (username.trim() === '' || password.trim() === '') {
//       setError('Please enter both username and password');
//     } else {
//       // Proceed with login logic
//       setError('');
//       // Call login API or perform authentication logic
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             placeholder="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
           
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="*********"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//         <div style={{cursor:"pointer"}}>
//         <br/>
//         <FaGoogle style={{marginRight:18}} size={30}/> 
          
//            <FaLinkedin style={{marginRight:18}}size={30}/>
//           <FaFacebook size={30}/>
//            </div>


//       </form>

      
//     </div>
//   );
// };

// export default LoginForm;



import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import './login.css'; 

const LoginForm = () => {
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
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <div className="social-icons">
          <FaGoogle className="social-icon" />
          <FaLinkedin className="social-icon" />
          <FaFacebook className="social-icon" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
