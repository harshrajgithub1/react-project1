import React from "react";
import logo from '../assets/logo.jpg';
import car from '../assets/car.avif';
import tank from '../assets/tank.webp';

const Home = () => {
    return ( 
        <div className="homie">
    
      <img src={car} height={1000} width={1831}></img>
 <h1> 
        EVERYTHING IS MORE BEAUTIFUL   </h1>
     <h1>WITH LOOK
</h1>
<h3>Allure is to encourage change by making it irresistible.

In 2025, 100% of vehicles in the Peugeot range will be electrified. Proof of our commitment to more respectful mobility.
 </h3>
   <img src={tank} height={500} width={500}></img>
        </div>
       
   

    )
    
  };
  
  export default Home;