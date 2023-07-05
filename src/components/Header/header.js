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
                    <a href='#'>Home</a>
                  </li>
                  <li>
                    <a href='#'>Accessories</a>
                  </li>
                  <li>
                    <a href='#'>About</a>
                  </li>
                  <li>
                    <a href='#'>Contact Us</a>
                  </li>
                  <li>
                    <a href='#'>Login</a>
                  </li>
               </ul> 
            </div>            
        </nav>

       {/* <section className='hero-sectopm'>
        <p>Welcome to</p>
        <h1>Techanical World</h1>
       </section>  */}
   </>
  )
}
export default header;