// import { useState, useEffect } from 'react';
// import productsdata from '../components/ProductList';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './cart.css';


// const Cart = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     let existed_cart_data = JSON.parse(localStorage.getItem('cart_product'));
//   if (existed_cart_data != null && existed_cart_data.length > 0) {
//     let updatedProducts = [];
//     existed_cart_data.forEach((cartItem) => {
//       let product = productsdata.find((x) => x.id === parseInt(cartItem.productId));
//       if (product) {
//         let data = {
//           imgsrc: product.imgsrc,
//           id: product.id,
//           name: product.name,
//           description: product.description,
//           qty: cartItem.qty,
//         };
//         updatedProducts.push(data);
//       }
//     });
//     setProducts(updatedProducts);
//     console.log(products);
//     console.log(updatedProducts);
//   }
// }, []);

//   return (
//     <div className='container'>
//       {products.length > 0 ? (
//         <div className='row'>
//           {products.map((product, index) => (
//             <div className='col-md-4' key={index}>
//               <div className='card'>
//                 <img src={product.imgsrc} alt='product' className='img-responsive' />
//                 <div>
//                   <h3>{product.name}</h3>
//                   <p>{product.description}</p>
//                   <p>Quantity: {product.qty}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>Product not found.</p>
//       )}

//       <div>
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default Cart;




// import { useState, useEffect } from 'react';
// import productsdata from '../components/ProductList';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './cart.css';

// const Cart = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     let existed_cart_data = JSON.parse(localStorage.getItem('cart_product'));
//     if (existed_cart_data != null && existed_cart_data.length > 0) {
//       let updatedProducts = [];
//       existed_cart_data.forEach((cartItem) => {
//         let product = productsdata.find((x) => x.id === parseInt(cartItem.productId));
//         if (product) {
//           let data = {
//             imgsrc: product.imgsrc,
//             id: product.id,
//             name: product.name,
//             description: product.description,
//             price: product.price, // Added product price
//             qty: cartItem.qty,
//           };
//           updatedProducts.push(data);
//         }
//       });
//       setProducts(updatedProducts);
//     }
//   }, []);

//   const handleRemove = (productId) => {
//     // Remove the product from the cart
//     const updatedProducts = products.filter((product) => product.id !== productId);
//     setProducts(updatedProducts);
//     toast.success('Product removed from the cart');
//   };

//   const handleClearCart = () => {
//     // Clear the entire cart
//     setProducts([]);
//     toast.success('Cart cleared successfully');
//   };

//   return (
//     <div className='container'>
//       {products.length > 0 ? (
//         <div>
//           <div className='row'>
//             {products.map((product, index) => (
//               <div className='col-md-4' key={index}>
//                 <div className='card'>
//                   <img src={product.imgsrc} alt='product' className='img-responsive' />
//                   <div>
//                     <h3>{product.name}</h3>
//                     <p>{product.description}</p>
//                     <p>Quantity: {product.qty}</p>
//                     <p>Total Price: ${product.price * product.qty}</p> {/* Total price calculation */}
//                     <button onClick={() => handleRemove(product.id)}>Remove</button> {/* Remove button */}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className='cart-total'>
//             <p>Total Price of Cart: ${products.reduce((total, product) => total + product.price * product.qty, 0)}</p> {/* Calculate the total price of the cart */}
//             <button onClick={handleClearCart}>Clear Cart</button> {/* Clear Cart button */}
//           </div>
//         </div>
//       ) : (
//         <p>Product not found.</p>
//       )}

//       <div>
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default Cart;






import { useState, useEffect } from 'react';
import productsdata from '../components/ProductList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './cart.css';

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let existed_cart_data = JSON.parse(localStorage.getItem('cart_product'));
    if (existed_cart_data != null && existed_cart_data.length > 0) {
      let updatedProducts = [];
      existed_cart_data.forEach((cartItem) => {
        let product = productsdata.find((x) => x.id === parseInt(cartItem.productId));
        if (product) {
          let data = {
            imgsrc: product.imgsrc,
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            qty: cartItem.qty,
          };
          updatedProducts.push(data);
        }
      });
      setProducts(updatedProducts);
    }
  }, []);

  const handleRemove = (productId) => {
    // Remove the product from the cart
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    toast.success('Product removed from the cart');
  };

  const handleClearCart = () => {
    // Clear the entire cart
    setProducts([]);
    toast.success('Cart cleared successfully');
  };

  return (
    <div className='cart-container'>
      <header>
        <h1>Shopping Cart</h1>
      </header>
      {products.length > 0 ? (
        <div className='cart-items'>
          {products.map((product, index) => (
            <div className='cart-item' key={index}>
              <img src={product.imgsrc} alt='product' />
              <div className='cart-item-info'>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Quantity: {product.qty}</p>
                <p>Total Price: ${product.price * product.qty}</p>
                <button onClick={() => handleRemove(product.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Product not found.</p>
      )}
      <div className='cart-total'>
        <p>Total Price of Cart: ${products.reduce((total, product) => total + product.price * product.qty, 0)}</p>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
