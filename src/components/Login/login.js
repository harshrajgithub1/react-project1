


import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';
import { usersData } from '../../Models/user';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const users = usersData;
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (username.trim() !== '' && password.trim() !== '') {
      let user = users.filter((x) => x.email === username);

      if (user.length > 0) {
        user = user[0];

        if (user.password === password) {
          localStorage.setItem('user', JSON.stringify(user));
          setIsLoggedIn(true);
          toast.success('Login Success', {
            position: toast.POSITION.BOTTOM_CENTER,
          });
          window.location.href='/home';
        } else {
          toast.error('Wrong credential', {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } else {
        toast.error('User doesn\'t exist', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    } else {
      toast.error('* All fields are required', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    toast.success('Logout Success', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1 className="text-center">Welcome, {localStorage.getItem('user').name}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1 className="text-center">Login</h1>
          <hr />
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="*********"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button type="submit">Login</button>
            <br />
            <div className="noaccount">
              <h6>
                "Don't have an account?"
                <a className="anotheroption" href="register">
                  Sign-up
                </a>
              </h6>
            </div>
            <div className="alternateoption">
              <span>Or</span>
            </div>
            <div className="social-icons">
              <FaLinkedin className="social-icon" />
              <FaFacebook className="social-icon" />
            </div>
          </form>
          <ToastContainer />
        </div>
      )}
    </div>
  );
};

export default LoginForm;
