import React from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Login from './components/Login/login';
import registration from './components/RegistrationForm/registration';

const App = () => {
  return(
 
<div>
<Header/>
  <Footer/>
 <Login/>
 <registration/>
</div>
  
 
  );
};

export default App;
