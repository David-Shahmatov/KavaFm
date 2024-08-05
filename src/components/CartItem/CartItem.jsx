import React from 'react';
import { useState, useEffect } from 'react';
import styles from './CartItem.module.scss';
import minus from '../../images/minus.png'
import plus from '../../images/plus.png'
import remove from '../../images/remove.png'
import { 
  pizzaImages, 
  garnishImages, 
  saladsImages, 
  sandwichImages,
  iceCreamImages,
  drinkImages
} from '../../images';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/cart/cart.slice';

const CartItem = ({ title, weight, image, price, id, quantity = 8, type }) => {
  const [countOfProduct, setCountOfProduct] = useState(quantity);
  const {productCount} = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();

  let imageSource;
  switch (type) {
    case 'pizza':
      imageSource = pizzaImages[image]
      break;

    case 'garnish':
      imageSource = garnishImages[image]
      break;

    case 'salads':
      imageSource = saladsImages[image]
      break;

    case 'sandwiches':
      imageSource = sandwichImages[image]
      break;

    case 'ice-creams':
      imageSource = iceCreamImages[image]
      break;

    case 'drinks':
      imageSource = drinkImages[image]
      break;
  
    default:
      break;
  }

  const addMethod = () => {
    if (countOfProduct < 10) {
      const newCount = countOfProduct + 1;
      setCountOfProduct(newCount);
      dispatch(actions.updateCartItemQuantity({ id, quantity: newCount }));
    }
  };

  const subtractMethod = () => {
    if (countOfProduct > 1) {
      const newCount = countOfProduct - 1;
      setCountOfProduct(newCount);
      dispatch(actions.updateCartItemQuantity({ id, quantity: newCount }));
    } else {
      dispatch(actions.removeFromCart(id));
    }
  };

  const removeItem = () => {
    dispatch(actions.removeFromCart(id));
  };

  useEffect(() => {
    setCountOfProduct(productCount[id] || 1);
  }, [productCount, id]);

  const totalPrice = price * countOfProduct;

  return (
    <div className={styles.cartItem}>
      <img src={imageSource} className={styles.cartItem__image} />
      <div className={styles.cartItem__container}>
        <p className={styles.cartItem__title}>{title}</p>
        <p className={styles.cartItem__weight}>{weight}</p>
      </div>
      <div className={styles.counter}>
        <img 
          className={styles.counter__icon} 
          src={minus} 
          alt="subtract"
          onClick={subtractMethod}
        />
        <p className={styles.counter__value}>{productCount[id]}</p>
        <img 
          className={styles.counter__icon}
          src={plus} 
          alt="add" 
          onClick={addMethod}
        />
      </div>
      <p className={styles.cartItem__price}>{totalPrice} грн</p>
        <img onClick={removeItem} src={remove} alt="" className={styles.cartItem__removeButton}/>
    </div>
  );
}

export default CartItem;