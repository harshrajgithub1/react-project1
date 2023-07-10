import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Home from "./Home";

const Layout = () => {
  return (
    <div>
      
        <Header/>    
        <Outlet />
        {/* <Home/> */}
        <Footer/>

      
    </div>
  )
};

export default Layout;