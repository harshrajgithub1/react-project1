import React from 'react'
import { productsdata } from '../Models/productModel';
import '../../src/index.css'

export default function Product(){
const listItems = productsdata.map(product =>
  <li key={product.id}> 
    <img className='img-responsive'
      src={product.imgsrc}
      alt={product.description}
    />
    <p>
      {product.description}
    </p>
  </li>
);
  return <ul>{listItems}</ul>;
}  

