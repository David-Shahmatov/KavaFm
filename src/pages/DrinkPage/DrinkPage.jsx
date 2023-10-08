import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { drinkImages } from "../../images";
import cart from "../../images/cart.png";
import plus from "../../images/plus.png";
import minus from "../../images/minus.png";
import styles from "./DrinkPage.module.scss";
import { useCart } from "../../context/CartContext";
import Footer from "../../components/Footer/Footer";

const DrinkPage = ({ items }) => {
  const { id } = useParams();
  const {
    addToCart,
    cartItems,
    removeFromCart,
    productCount,
    updateCartItemQuantity,
  } = useCart();
  const [countOfProduct, setCountOfProduct] = useState(productCount[id] || 1);

  const drink = items.find((item) => item.id === id);
  const drinkPrice = drink.price;
  const drinkImage = drinkImages[drink.image];
  const totalDrinkPrice = drinkPrice * countOfProduct;
  const itemInCart = cartItems.find((item) => item.id === id);

  const handleAddToCart = () => {
    if (!itemInCart) {
      const drinkItem = {
        id: drink.id,
        title: drink.title,
        price: drink.price,
        weight: drink.weight,
        quantity: countOfProduct,
        image: drink.image,
        type: drink.type,
      };
      addToCart(drinkItem);
    } else {
      updateCartItemQuantity(id, countOfProduct);
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCart(drink.id);
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
      <div className={styles.ways}>
        <p>
          <Link to="/" className={styles.ways__link}>
            Головна{" "}
          </Link>
          &gt;
          <Link to="/drinks" className={styles.ways__link}>
            {" "}
            Напої{" "}
          </Link>
          &gt; {drink.title}
        </p>
      </div>
      <div className={styles.drinkPage}>
        <img className={styles.drinkPage__image} src={drinkImage} alt="" />
        <div className={styles.infoBlock}>
          <p className={styles.infoBlock__title}>{drink.title}</p>
          <p className={styles.infoBlock__weight}>{drink.weight}</p>
          <div className={styles.priceBlock}>
            <p className={styles.priceBlock__text}>Ціна:</p>
            <p className={styles.priceBlock__price}>{totalDrinkPrice} грн</p>
          </div>
            {!itemInCart ? (
              <div className={styles.cart} onClick={handleAddToCart}>
                <img src={cart} alt="" className={styles.cart__image} />
                <p className={styles.cart__title}>В кошик</p>
              </div>
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
      </div>
      <Footer />
    </>
  );
};

export default DrinkPage;
