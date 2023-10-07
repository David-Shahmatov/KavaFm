import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { sandwichImages } from '../../images';
import cart from '../../images/cart.png';
import plus from '../../images/plus.png';
import minus from '../../images/minus.png';
import styles from './SandwichPage.module.scss';
import { useCart } from '../../context/CartContext';
import Footer from '../../components/Footer/Footer';

const SandwichPage = ({ items }) => {
  const { id } = useParams();
  const { addToCart, cartItems, removeFromCart, productCount, updateCartItemQuantity } = useCart();
  const [countOfProduct, setCountOfProduct] = useState(productCount[id] || 1);

  const sandwich = items.find((item) => item.id === id);
  const sandwichPrice = sandwich.price;
  const sandwichImage = sandwichImages[sandwich.image];
  const totalSandwichPrice = sandwichPrice * countOfProduct;
  const itemInCart = cartItems.find((item) => item.id === id);

  const handleAddToCart = () => {
    if (!itemInCart) {
      const sandwichItem = {
        id: sandwich.id,
        title: sandwich.title,
        price: sandwich.price,
        weight: sandwich.weight,
        quantity: countOfProduct,
        image: sandwich.image,
        type: sandwich.type,
      };
      addToCart(sandwichItem);
    } else {
      updateCartItemQuantity(id, countOfProduct);
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCart(sandwich.id);
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
          <Link to="/salads" className={styles.ways__link}>
            {" "}
            Салати{" "}
          </Link>
          &gt; {sandwich.title}
        </p>
      </div>
      <div className={styles.sandwichPage}>
        <img className={styles.sandwichPage__image} src={sandwichImage} alt="" />
        <div className={styles.infoBlock}>
          <p className={styles.infoBlock__title}>{sandwich.title}</p>
          <p className={styles.infoBlock__weight}>{sandwich.weight}</p>
          <p className={styles.infoBlock__ingredients}>
            <p style={{ fontSize: "25px", color: "#000" }}>Склад:</p>{" "}
            {sandwich.ingredients}
          </p>
          <div className={styles.priceBlock}>
            <p className={styles.priceBlock__price}>{totalSandwichPrice} грн</p>
            {!itemInCart ? (
              <div className={styles.cart} onClick={handleAddToCart}>
                <img src={cart} alt="" className={styles.cart__image} />
                <p className={styles.cart__title}>В кошик</p>
              </div>
            ) : (
              <div className={styles.cartActive} onClick={handleRemoveFromCart}>
                <img src={cart} alt="" className={styles.cart__image} />
                <p className={styles.cart__title}>У кошику</p>
              </div>
            )}
          </div>
          <div className={styles.counter}>
            <img
              className={styles.counter__icon}
              src={minus}
              alt="subtract"
              onClick={subtractMethod}
            />
            <p className={styles.counter__value}>{countOfProduct}</p>
            <img
              className={styles.counter__icon}
              src={plus}
              alt="add"
              onClick={addMethod}
            />
          </div>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default SandwichPage;
