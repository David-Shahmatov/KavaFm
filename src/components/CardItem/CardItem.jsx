import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  pizzaImages,
  garnishImages,
  saladsImages,
  sandwichImages,
  iceCreamImages,
  drinkImages,
} from "../../images";
import minus from "../../images/minus.png";
import plus from "../../images/plus.png";
import { useCart } from "../../context/CartContext";
import styles from "./CardItem.module.scss";

const CardItem = ({
  weight,
  title,
  ingredients,
  price,
  image,
  id,
  type,
  quantity = 1,
}) => {
  let path = `/${type}/${id}`;
  let imageSource;
  switch (type) {
    case "pizza":
      imageSource = pizzaImages[image];
      break;

    case "garnish":
      imageSource = garnishImages[image];
      break;

    case "salads":
      imageSource = saladsImages[image];
      break;

    case "sandwiches":
      imageSource = sandwichImages[image];
      break;

    case "ice-creams":
      imageSource = iceCreamImages[image];
      break;

    case "drinks":
      imageSource = drinkImages[image];
      break;

    default:
      break;
  }

  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    productCount,
  } = useCart();
  const itemInCart = cartItems.find((item) => item.id === id);
  const [countOfProduct, setCountOfProduct] = useState(quantity);

  const handleAddToCart = () => {
    if (!itemInCart) {
      addToCart({ id, title, price, image, weight, type, quantity: 1 });
    }
  };

  const addMethod = () => {
    if (countOfProduct < 10) {
      setCountOfProduct((prevCount) => {
        const newCount = prevCount + 1;
        updateCartItemQuantity(id, newCount);
        return newCount;
      });
    }
  };

  const subtractMethod = () => {
    if (countOfProduct > 1) {
      setCountOfProduct((prevCount) => {
        const newCount = prevCount - 1;
        updateCartItemQuantity(id, newCount);
        return newCount;
      });
    } else {
      removeFromCart(id);
    }
  };

  useEffect(() => {
    setCountOfProduct(productCount[id] || 1);
  }, [productCount, id]);

  return (
    <>
      <div className={styles.cardItem}>
        <Link to={path}>
          <img
            src={imageSource}
            className={styles.cardItem__image}
            alt={title}
          />
        </Link>
        <p className={styles.cardItem__weight}>{weight}</p>
        <p className={styles.cardItem__title}>{title}</p>
        <p className={styles.cardItem__ingredients}>{ingredients}</p>
        <div className={styles.cardItem__containerPrice}>
          <div className={styles.cardItem__price}>Ціна:</div>
          <div className={styles.cardItem__priceValue}>{price} грн</div>
        </div>
        {!itemInCart ? (
          <button onClick={handleAddToCart} className={styles.cardItem__button}>
            В кошик
          </button>
        ) : (
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
        )}
      </div>
    </>
  );
};
export default CardItem;
