import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import productsdata from '../components/ProductList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    updateCartFromLocalStorage(); // Call the function directly when the component mounts
  }, []); // Pass an empty dependency array to run this effect only once on mount

  const updateCartFromLocalStorage = () => {
    let existed_cart_data = JSON.parse(localStorage.getItem('cart_product'));
    if (existed_cart_data != null && existed_cart_data.length > 0) {
      let updatedProducts = [];
      let calculatedTotalAmount = 0;
      existed_cart_data.forEach((cartItem) => {
        let product = productsdata.find((x) => x.id === parseInt(cartItem.productId));
        if (product) {
          let data = {
            imgsrc: product.imgsrc,
            id: product.id,
            name: product.name,
            description: product.description,
            qty: cartItem.qty,
            price: product.price,
          };
          updatedProducts.push(data);
          calculatedTotalAmount += cartItem.qty * product.price;
        }
      });
      setProducts(updatedProducts);
      setTotalAmount(calculatedTotalAmount);
    }
  };

  const handleRemoveItem = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);

    // Recalculate the total amount after item removal
    const calculatedTotalAmount = updatedProducts.reduce(
      (total, product) => total + product.qty * product.price,
      0
    );
    setTotalAmount(calculatedTotalAmount);

    // Update the localStorage with the updated cart data
    const cartData = updatedProducts.map((product) => ({
      productId: product.id,
      qty: product.qty,
    }));
    localStorage.setItem('cart_product', JSON.stringify(cartData));
  };

  return (
    <div className='container'>
      <header>
        <h1>Checkout</h1>
      </header>
      {products.length > 0 ? (
        <div className='row'>
          {products.map((product, index) => (
            <div className='col-md-4' key={index}>
              <div className='card'>
                <img src={product.imgsrc} alt='product' className='img_responsive' />
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Quantity: {product.qty}</p>
                  <p>Price: {product.price}</p>
                  <button onClick={() => handleRemoveItem(product.id)}>Remove Item</button>
                </div>
              </div>
            </div>
          ))}
          <div>
            <button onClick={() => navigate('/Paymentform')} disabled={products.length === 0}>
              Proceed to Payment
            </button>
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
      <div>Total Amount: ${totalAmount}</div>
      <div>
        <ToastContainer />
      </div>
      {/* Not sure what this component is, but I left it here as it is in the original code */}
      <div>
        <checkoutForm />
      </div>
    </div>
  );
};

export default Cart;





// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import productsdata from '../components/ProductList';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Cart = () => {
//   const [products, setProducts] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     let existed_cart_data = JSON.parse(localStorage.getItem('cart_product'));
//     if (existed_cart_data != null && existed_cart_data.length > 0) {
//       let updatedProducts = [];
//       let calculatedTotalAmount = 0;
//       existed_cart_data.forEach((cartItem) => {
//         let product = productsdata.find((x) => x.id === parseInt(cartItem.productId));
//         if (product) {
//           let data = {
//             imgsrc: product.imgsrc,
//             id: product.id,
//             name: product.name,
//             description: product.description,
//             qty: cartItem.qty,
//             price: product.price,
//           };
//           updatedProducts.push(data);
//           calculatedTotalAmount += cartItem.qty * product.price;
//         }
//       });
//       setProducts(updatedProducts);
//       setTotalAmount(calculatedTotalAmount);
//     }
//   }, []);

//   const handleRemoveItem = (productId) => {
//     const updatedProducts = products.filter((product) => product.id !== productId);
//     setProducts(updatedProducts);

//     // Recalculate the total amount after item removal
//     const calculatedTotalAmount = updatedProducts.reduce(
//       (total, product) => total + product.qty * product.price,
//       0
//     );
//     setTotalAmount(calculatedTotalAmount);

//     // Update the localStorage with the updated cart data
//     const cartData = updatedProducts.map((product) => ({
//       productId: product.id,
//       qty: product.qty,
//     }));
//     localStorage.setItem('cart_product', JSON.stringify(cartData));
//   };

//   return (
//     <div className='container'>
//       <header>
//         <h1>Checkout</h1>
//       </header>
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
//                   <p>Price: {product.price}</p>
//                   <button onClick={() => handleRemoveItem(product.id)}>Remove Item</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div>
//             <button onClick={() => navigate('/Paymentform')} disabled={products.length === 0}>
//               Proceed to Payment
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p>Product not found.</p>
//       )}
//       <div>Total Amount: ${totalAmount}</div>
//       <div>
//         <ToastContainer />
//       </div>
//       {/* Not sure what this component is, but I left it here as it is in the original code */}
//       <div>
//         <checkoutForm />
//       </div>
//     </div>
//   );
// };

// export default Cart;





// import { useState, useEffect } from 'react';
// import {useNavigate} from "react-router-dom";
// import productsdata from '../components/ProductList';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const Cart = () => {
//   const [products, setProducts] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);
// const navigate=useNavigate();


//   useEffect(() => {
//     let existed_cart_data = JSON.parse(localStorage.getItem('cart_product'));
//   if (existed_cart_data != null && existed_cart_data.length > 0) {
//     let updatedProducts = [];
//     let calculatedTotalAmount = 0;
//     existed_cart_data.forEach((cartItem) => {
//       let product = productsdata.find((x) => x.id === parseInt(cartItem.productId));
//       if (product) {
//         let data = {
//           imgsrc: product.imgsrc,
//           id: product.id,
//           name: product.name,
//           description: product.description,
//           qty: cartItem.qty,
//           price: product.price,
//         };
//         updatedProducts.push(data);
//         calculatedTotalAmount += cartItem.qty * product.price;
//         console.log(totalAmount);
//       }
//     });
//     setProducts(updatedProducts);
//     setTotalAmount(calculatedTotalAmount); 
//     console.log(products);
//     console.log(updatedProducts);
//   }
// }, []);



//   return (
//     <div className='container'>
//     <header>
//         <h1>Checkout</h1>
//       </header>
//       {products.length > 0 ? (
//         <div className='row'>
//           {products.map((product, index) => (
//             <div className='col-md-4' key={index}>
//               <div className='card'>
//                 <img src={product.imgsrc} alt='product' className='img-responsive' />
//                 <div>
//                   <h3>{product.name}</h3>
//                    <p>{product.description}</p>
//                      <p>Quantity: {product.qty}</p>
//                    <p>Price: {product.price}</p>
                    
                   
//                 </div>
//               </div>
//             </div>
//           ))}

//           <div>
//                          <button onClick={()=>navigate("/Paymentform")}>Proceed to Payment</button>

//                     </div>

 
//         </div>
        
//       ): 
//         (
//         <p>Product not found.</p>
//       )}
//         <div>
//           Total Amount:${totalAmount}
//         </div>



 
 
//       <div>
//         <ToastContainer />
//       </div>
//       <div>
//         <checkoutForm/>
//       </div>
//     </div>
//   );
// };

// export default Cart;






// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import productsdata from '../components/ProductList';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Cart = () => {
//   const history = useHistory();
//   const [products, setProducts] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect(() => {
//     // Your existing code for retrieving and updating the cart data
//     // ...

//   }, []);

//   const handlePayment = () => {
//     // Redirect to the payment form page
//     history.push('/payment-form');
//   };

//   return (
//     <div className='container'>
//       {/* Your existing code for displaying products */}
//       {/* ... */}

//       {/* Display the total amount */}
//       <div>Total Amount: ${totalAmount}</div>

//       {/* Payment button */}
//       <button onClick={handlePayment}>Proceed to Payment</button>

//       {/* ToastContainer and other elements */}
//       <div>
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default Cart;

