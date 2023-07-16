import { useState, useEffect } from 'react';
import productsdata from '../components/ProductList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          qty: cartItem.qty,
        };
        updatedProducts.push(data);
      }
    });
    setProducts(updatedProducts);
    console.log(products);
    console.log(updatedProducts);
  }
}, []);

  return (
    <div className='container'>
      {products.length > 0 ? (
        <div className='row'>
          {products.map((product, index) => (
            <div className='col-md-4' key={index}>
              <div className='card'>
                <img src={product.imgsrc} alt='product' className='img-responsive' />
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Quantity: {product.qty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Product not found.</p>
      )}

      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Cart;
