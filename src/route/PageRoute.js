import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from '../components/RegistrationForm/registration';
import Login from '../components/Login/login';
import Home from "../pages_router/Home"
import Layout from '../pages_router/Layout';
import NoPage from '../pages_router/NoPage';
import Blogs from '../pages_router/Blogs';
import About from '../pages_router/About';
import Contact from '../pages_router/Contact';
import Location from '../pages_router/Location';
import Product from '../pages_router/Product';
import Cart from "../pages_router/Cart";

import ProductList from '../components/ProductList';
import ProductDetails from '../components/ProductDetails';



export default function PageRoute() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* <Route index element={<Home />} /> */}
              <Route index path="home" element={<Home />} /> 
              <Route path="register" element={<RegistrationForm />} />
              <Route path="login" element={<Login />} />
              <Route path="blog" element={<Blogs />} />
              <Route path="about" element={<About />} />
              <Route path="Contact Us" element={<Contact />} />
              <Route path="Location" element={<Location />}/>
              <Route path="Product" element={<Product/>}/>
              <Route path='/Cart' element={<Cart/>}/>
              <Route path="/product/details/:id" element={<ProductDetails/>} />
              

              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
}
