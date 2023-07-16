
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsdata from './ProductList';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  function addToCart(){
    // check if data already is in local storage
    // if exist then update else create
    let existed_cart_data = JSON.parse(localStorage.getItem("cart_product"));
    if(existed_cart_data !=null && existed_cart_data.length>0){
      let cart_obj={
        productId: obj.id,
        qty: count
      }
      for(let i=0; i<existed_cart_data.length; i++){
        if(existed_cart_data[i].productId == obj.id ){
          existed_cart_data[i].qty = existed_cart_data[i].qty+ count;
          localStorage.setItem("cart_product",JSON.stringify(existed_cart_data));
          return;
        }
      }
      existed_cart_data.push(cart_obj);
      localStorage.setItem("cart_product",JSON.stringify(existed_cart_data));
    }
    else{
      let cart_obj=[{
        productId: obj.id,
        qty: count
      }]
      localStorage.setItem("cart_product",JSON.stringify(cart_obj));
    }
    toast.success('Product added', {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  const productList = productsdata.filter((x) => x.id === parseInt(id));
  const obj = productList.length > 0 ? productList[0] : null;

  return (
    <div className='container'>
      {obj ? (
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <img src={obj.imgsrc} alt='product' className='img-responsive' />
            </div>
          </div>
          <div className='col-md-8'>
            <h2>{obj.name}</h2>
            <p>{obj.description}</p>
            <p>${obj.price}</p>
            <p>Stars: {obj.ratings}</p>
            <div className='box'>
              <button className='btn btn-outline' onClick={increase}>
                <FaPlus />
              </button>
              {count}
              <button className='btn btn-outline' onClick={decrease}>
                <FaMinus />
              </button>
            </div>
            <button className='btn btn-success' disabled={count==0} onClick={addToCart}>Add To Cart</button>
          </div>
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

export default ProductDetails;
