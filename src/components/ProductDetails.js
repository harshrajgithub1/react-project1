
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsdata from './ProductList';
import { FaPlus, FaMinus } from "react-icons/fa";

const ProductDetails = () => {
  let productid = useParams();
let obj={};
let count=0;
const increase=()=>{
  count= count + 1
}

const decrease=()=>{
  count= count - 1
}

let productList = productsdata.filter(x=>x.id==productid.id);
console.log(productList);
if(!!productList){
  obj = productList[0];
console.log(obj);
}

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='card'>
            <img src={obj.imgsrc} alt='product' className='img-responsive'/>
          </div>
        </div>
        <div className='col-md-8'>
          <h2>{obj.name}</h2>
          <p>{obj.description}</p>
          <p>${obj.price}</p>
          <p>Stars: {obj.ratings}</p>
          <div className='box'>
            <button className='btn btn-outline'  onClick={increase}>
              <FaPlus/>
            </button>
            {count}
            <button className='btn btn-outline' onClick={decrease}>
            <FaMinus/>

            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProductDetails;
