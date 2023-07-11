// import React from 'react'

// import '../../src/index.css'
// import ProductList from '../components/ProductList';
// console.log(ProductList);
// export default function Product(){
// const listItems = ProductList.map(product =>
//   <li key={product.id}> 
//   <a href='https://google.com'>
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
// }  





import React from 'react'

import '../../src/index.css'
import ProductList from '../components/ProductList';
console.log(ProductList);

export default function Product(){
const listItems = ProductList.map(product =>
  <li key={product.id}> 
  {/* <a href="product/details/123456781"{...product.id}> */}
  <a href={`/product/details/${product.id}`}> 
    <img className='img-responsive'
      src={product.imgsrc}
      alt={product.description}
    />
    <p>
      {product.description}
    </p>
    </a>
  </li>
);
  return <ul>{listItems}</ul>;
}  

