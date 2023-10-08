import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { iceCreamImages } from "../../images";
import cart from "../../images/cart.png";
import plus from "../../images/plus.png";
import minus from "../../images/minus.png";
import styles from "./IceCream.module.scss";
import { useCart } from "../../context/CartContext";
import Footer from "../../components/Footer/Footer";

const IceCreamPage = ({ items }) => {
  const { id } = useParams();
  const {
    addToCart,
    cartItems,
    removeFromCart,
    productCount,
    updateCartItemQuantity,
  } = useCart();
  const [countOfProduct, setCountOfProduct] = useState(productCount[id] || 1);

  const iceCream = items.find((item) => item.id === id);
  const iceCreamPrice = iceCream.price;
  const iceCreamImage = iceCreamImages[iceCream.image];
  const totalIceCreamPrice = iceCreamPrice * countOfProduct;
  const itemInCart = cartItems.find((item) => item.id === id);

  const handleAddToCart = () => {
    if (!itemInCart) {
      const iceCreamItem = {
        id: iceCream.id,
        title: iceCream.title,
        price: iceCream.price,
        weight: iceCream.weight,
        quantity: countOfProduct,
        image: iceCream.image,
        type: iceCream.type,
      };
      addToCart(iceCreamItem);
    } else {
      updateCartItemQuantity(id, countOfProduct);
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCart(iceCream.id);
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
          <Link to="/ice-creams" className={styles.ways__link}>
            {" "}
            Морозиво{" "}
          </Link>
          &gt; {iceCream.title}
        </p>
      </div>
      <div className={styles.iceCreamPage}>
        <img
          className={styles.iceCreamPage__image}
          src={iceCreamImage}
          alt=""
        />
        <div className={styles.infoBlock}>
          <p className={styles.infoBlock__title}>{iceCream.title}</p>
          <p className={styles.infoBlock__weight}>{iceCream.weight}</p>
          <p className={styles.infoBlock__ingredients}>
            <p style={{ fontSize: "25px", color: "#000" }}>Склад:</p>{" "}
            {iceCream.ingredients}
          </p>
          <div className={styles.priceBlock}>
            <p className={styles.priceBlock__text}>Ціна:</p>
            <p className={styles.priceBlock__price}>{totalIceCreamPrice} грн</p>
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

export default IceCreamPage;
