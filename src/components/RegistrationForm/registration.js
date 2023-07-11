
import "./registration.css";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RegistrationForm = () => {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');



  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName == '' || lastName == '' || dateOfBirth == '' || email == '' || password == '') {
      toast.error('* All fields are required', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    else{
      toast.success('Successfully Registered', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    // Handle form submission logic here
    console.log('Submitted:', firstName, lastName, dateOfBirth, email, password);
  };

  const showToastMessage = () => {
    toast.success('Success Notification !', {
      position: toast.POSITION.TOP_RIGHT
    });
  }


  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="registr-form">
        <div className="row">
          <h1 className="text-center">Register Form</h1>
          <hr/>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="firstName">First Name:</label>
            <input
              className="form-control"
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              required
              placeholder='FirstName'
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              required
              placeholder='LastName'
            />
          </div>

        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              className="form-control"
              type="date"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={handleDateOfBirthChange}
              required
            />
          </div>


          <div className="col-md-6">
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              placeholder='abc@outlook.com'
            />
          </div>
        </div>


        <div className="row">
          <div className="col-md-6">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
              placeholder='**********'
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              placeholder='**********'
              className="form-control"
            />
          </div>

        </div>


        <div>
          <ToastContainer />
        </div>

        <button type="submit" className="btn btn-success">Register</button>

      </form>
    </div>

  );
};


export default RegistrationForm;
