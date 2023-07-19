
import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';

const user = JSON.parse(localStorage.getItem('user'));
console.log(user);

function logout() {
  localStorage.clear();
  window.location.href = "/login";
}

const Header = () => {
  return (
    <>
      <nav className='main-nav'>
        <div className='logo'>
          <h2>
            <span>Technical</span>
          </h2>
        </div>
        <div>
          {/* <img src='simon-daoudi-2wFoa040m8g-unsplash.jpg' alt='watch'></img> */}
        </div>
        <div className='menu-link'>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
              {/* <img src='simon-daoudi-2wFoa040m8g-unsplash.jpg' alt='watch'></img> */}
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/About'>About</Link>
            </li>
            <li>
              <Link to='/Contact Us'>Contact Us</Link>
            </li>

            <li>
              <Link to='/location'>Location</Link>
            </li>
            <li>
              <Link to='/product'>Product</Link>
            </li>
            <li>
              <Link to='/subscription'>Subscription</Link>
            </li>
            {user != null && (
              <>
                <li>
                  <Link to='/cart'>Cart</Link>
                </li>
                <li>
                  <Link to='/checkout'>Checkout</Link>
                </li>
                <li>
                  <Link to='#' onClick={logout}>Logout</Link>
                </li>

              </>

            )}

            {user == null && (
              <>
                <li>
                  <Link to='/login'>Login</Link>
                </li>
                <li>
                  <Link to='/register'>Register</Link>
                </li>
              </>
            )}


          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
