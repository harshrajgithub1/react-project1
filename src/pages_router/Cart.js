import React, { useState } from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

const Product = ({ product, onAddToCart }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h1>Product Catalog</h1>
      <Cart cartItems={cartItems} />
      <hr />
      <Product
        product={{ id: 1, name: 'Product 1', price: 10.99 }}
        onAddToCart={handleAddToCart}
      />
      <Product
        product={{ id: 2, name: 'Product 2', price: 19.99 }}
        onAddToCart={handleAddToCart}
      />
      {/* Add more Product components as needed */}
    </div>
  );
};

export default Cart;
