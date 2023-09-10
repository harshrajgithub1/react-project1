

import React from 'react'

import '../../index.css'
import ProductList from '../../components/ProductList';
import ProductItem from './ProductItem';
import classes from './Product.module.css';

console.log(ProductList);

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <div className='row'>
        {ProductList.map((product) => (
          <div className='col-md-4'>
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            img = {product.imgsrc}
          />
          </div>
          
        ))}
        </div>
        
      </ul>
    </section>
  );
};

export default Products;


// const listItems = ProductList.map(product =>
//   <li key={product.id}> 
  
//   <a href={`/product/details/${product.id}`}> 
//     <img className='img-responsive'
//       src={product.imgsrc}
//       alt={product.description}
//     />
//     <p>
//       {product.description}
//     </p>
//     </a>
//   </li>
// );
//   return <ul>{listItems}</ul>;
//}  

