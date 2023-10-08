import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { garnishImages } from "../../images";
import cart from "../../images/cart.png";
import plus from "../../images/plus.png";
import minus from "../../images/minus.png";
import styles from "./GarnishPage.module.scss";
import { useCart } from "../../context/CartContext";
import Footer from "../../components/Footer/Footer";

const GarnishPage = ({ items }) => {
  const { id } = useParams();
  const {
    addToCart,
    cartItems,
    removeFromCart,
    productCount,
    updateCartItemQuantity,
  } = useCart();
  const [countOfProduct, setCountOfProduct] = useState(productCount[id] || 1);

  const garnish = items.find((item) => item.id === id);
  const garnishPrice = garnish.price;
  const garnishImage = garnishImages[garnish.image];
  const totalGarnishPrice = garnishPrice * countOfProduct;
  const itemInCart = cartItems.find((item) => item.id === id);

  const handleAddToCart = () => {
    if (!itemInCart) {
      const drinkItem = {
        id: garnish.id,
        title: garnish.title,
        price: garnish.price,
        weight: garnish.weight,
        quantity: countOfProduct,
        image: garnish.image,
        type: garnish.type,
      };
      addToCart(drinkItem);
    } else {
      updateCartItemQuantity(id, countOfProduct);
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCart(garnish.id);
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
          <Link to="/garnish" className={styles.ways__link}>
            {" "}
            Гарнір{" "}
          </Link>
          &gt; {garnish.title}
        </p>
      </div>
      <div className={styles.garnishPage}>
        <img className={styles.garnishPage__image} src={garnishImage} alt="" />
        <div className={styles.infoBlock}>
          <p className={styles.infoBlock__title}>{garnish.title}</p>
          <p className={styles.infoBlock__weight}>{garnish.weight}</p>
          <p className={styles.infoBlock__ingredients}>
            <p style={{ fontSize: "25px", color: "#000" }}>Склад:</p>{" "}
            {garnish.ingredients}
          </p>
          <div className={styles.priceBlock}>
            <p className={styles.priceBlock__text}>Ціна:</p>
            <p className={styles.priceBlock__price}>{totalGarnishPrice} грн</p>
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
          <div className={styles.checklist}>
            <p className={styles.checklist__title}>
              Додатки до гарніру: (50гр.)
            </p>
            <ul className={styles.checklist__list}>
              <li className={styles.checklist__item}>
                Соус сирний
                <span className={styles.checklist__price}>5 грн</span>
              </li>
              <li className={styles.checklist__item}>
                Соус каррі
                <span className={styles.checklist__price}>5 грн</span>
              </li>
              <li className={styles.checklist__item}>
                Кетчуп
                <span className={styles.checklist__price}>5 грн</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GarnishPage;
