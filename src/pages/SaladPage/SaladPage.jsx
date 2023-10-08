import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { saladsImages } from "../../images";
import cart from "../../images/cart.png";
import plus from "../../images/plus.png";
import minus from "../../images/minus.png";
import styles from "./SaladPage.module.scss";
import { useCart } from "../../context/CartContext";
import Footer from "../../components/Footer/Footer";

const SaladPage = ({ items }) => {
  const { id } = useParams();
  const {
    addToCart,
    cartItems,
    removeFromCart,
    productCount,
    updateCartItemQuantity,
  } = useCart();
  const [countOfProduct, setCountOfProduct] = useState(productCount[id] || 1);

  const salad = items.find((item) => item.id === id);
  const saladPrice = salad.price;
  const saladImage = saladsImages[salad.image];
  const totalSaladPrice = saladPrice * countOfProduct;
  const itemInCart = cartItems.find((item) => item.id === id);

  const handleAddToCart = () => {
    if (!itemInCart) {
      const saladItem = {
        id: salad.id,
        title: salad.title,
        price: salad.price,
        weight: salad.weight,
        quantity: countOfProduct,
        image: salad.image,
        type: salad.type,
      };
      addToCart(saladItem);
    } else {
      updateCartItemQuantity(id, countOfProduct);
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCart(salad.id);
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
          &gt; {salad.title}
        </p>
      </div>
      <div className={styles.saladPage}>
        <img className={styles.saladPage__image} src={saladImage} alt="" />
        <div className={styles.infoBlock}>
          <p className={styles.infoBlock__title}>{salad.title}</p>
          <p className={styles.infoBlock__weight}>{salad.weight}</p>
          <p className={styles.infoBlock__ingredients}>
            <p style={{ fontSize: "25px", color: "#000" }}>Склад:</p>{" "}
            {salad.ingredients}
          </p>
          <div className={styles.priceBlock}>
            <p className={styles.priceBlock__price}>{totalSaladPrice} грн</p>
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

export default SaladPage;
