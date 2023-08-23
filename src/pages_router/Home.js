import React from "react";
import logo from '../assets/logo.jpg';
import car from '../assets/car.avif';
import tank from '../assets/tank.webp';

const Home = () => {
  return (
    <div>

      <img src={car} className="img-responsive"></img>

      <div className="spacer"></div>
      <div className="container">
        <div className="row">
        <div className="col-md-4">
                <h1>
                  EVERYTHING IS MORE BEAUTIFUL   
                </h1>
                <h1>
                  WITH LOOK
                </h1>
                <p>
                  Allure is to encourage change by making it irresistible.
                  In 2025, 100% of vehicles in the Peugeot range will be electrified. Proof of our commitment to more respectful mobility.
                </p>
              </div>
              <div className="col-md-8">
                <img src={tank} className="img-responsive"></img>
              </div>
          
        </div>
        
      </div>

    </div>



  )

};

export default Home;