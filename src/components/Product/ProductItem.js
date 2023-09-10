import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { cartActions } from '../../store/cart-slice';
import Card from '../../pages_router/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { name, price, description, id, img } = props;

  const addToCartHandler = () => {
    const newTotalQuantity = cart.totalQuantity + 1;

    const updatedItems = cart.items.slice(); // create copy via slice to avoid mutating original state
    const existingItem = updatedItems.find((item) => item.id === id);
    if (existingItem) {
      const updatedItem = { ...existingItem }; // new object + copy existing properties to avoid state mutation
      updatedItem.quantity++;
      updatedItem.totalPrice = updatedItem.totalPrice + price;
      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === id
      );
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({
        id: id,
        price: price,
        quantity: 1,
        totalPrice: price,
        name: name,
        img: img
      });
    }
    toast.success('Product added', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    const newCart = {
      totalQuantity: newTotalQuantity,
      items: updatedItems,
    };

    dispatch(cartActions.replaceCart(newCart));
    
    
  };

  return (
    <li className={classes.item}>
      <Card className={classes.fixed_height_400}>
        <header>
          <h3>{name}</h3>
        </header>
        <img src={img} className={classes.img_responsive}/>
        <p>{description.length>90? description.substring(0,87) + '...' : description}</p>
        <div className={classes.actions}>
          <div className={classes.pull_left}>
          <div className={classes.price}>${price.toFixed(2)}</div>

          </div>
          <div className={classes.pull_right}>
          <button onClick={addToCartHandler}>Add to Cart</button>
            
          </div>
          
        </div>
          <ToastContainer />
      </Card>
    </li>
  );
};

export default ProductItem;