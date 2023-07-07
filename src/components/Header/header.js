import React from 'react'
import "./header.css";
const header = () => {
  return (
   <>
        <nav className='main-nav'>
            <div className='logo'>
                <h2>
                    <span>Technical</span>
                    
                </h2>
            </div>

            <div className='menu-link'>
               <ul>
                  <li>
                    <a href='home'>Home</a>
                    <img src='simon-daoudi-2wFoa040m8g-unsplash.jpg' alt='watch'></img>
                  </li>
                  <li>
                    <a href='blog'>Blog</a>
                  </li>
                  <li>
                    <a href='About'>About</a>
                  </li>
                  <li>
                    <a href='Contact Us'>Contact Us</a>
                  </li>
                  <li>
                    <a href='login'>Login</a>
                  </li>
                  <li>
                    <a href='register'>Register</a>
                  </li>
                  <li>
                    <a href='location'>Location</a>
                  </li>
                  <li>
                    <a href='product'>Product</a>   
                  </li>
                
               </ul> 
            </div>            
        </nav>

   </>
  )
}
export default header;