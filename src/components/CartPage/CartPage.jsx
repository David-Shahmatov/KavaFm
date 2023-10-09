import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import styles from "./CartPage.module.scss";
import attention from "../../images/attention.png";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const [commonSum, setCommonSum] = useState(0);

  const pluralizePositions = (count) => {
    const lastTwoDigits = count % 100;
    const lastDigit = count % 10;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      return `${count} позицій`;
    } else if (lastDigit === 1) {
      return `${count} позиція`;
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return `${count} позиції`;
    } else {
      return `${count} позицій`;
    }
  };

  let totalPositions = 0;

  for (const item of cartItems) {
    totalPositions += item.quantity;
  }

  useEffect(() => {
    let sum = 0;
    for (const item of cartItems) {
      sum += item.price * item.quantity;
    }
    setCommonSum(sum);
  }, [cartItems]);

  const clearCart = () => {
    cartItems.map((item) => {
      removeFromCart(item.id);
    });
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <div className={styles.emptyCartPage}>
          <div class={styles.customLoader}></div>
          <p className={styles.emptyCartPage__title}>Уппс, у вас порожньо!</p>
          <p className={styles.emptyCartPage__subtitle}>
            Ваший кошик порожній , додайте щось з меню
          </p>
          <Link to="/" className={styles.emptyCartPage__button}>
            Перейти до меню
          </Link>
        </div>
      ) : (
        <div className={styles.cartPage}>
          <p className={styles.cartPage__title}>Ваша корзина</p>
          <p className={styles.cartPage__button} onClick={clearCart}>
            Очистити корзину
          </p>
          <div className={styles.cartPage__content}>
            <div className={styles.cartPage__list}>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  title={item.title}
                  weight={item.weight}
                  image={item.image}
                  price={item.price}
                  priceWithAdds={item.priceWithAdds}
                  id={item.id}
                  quantity={item.quantity}
                  type={item.type}
                />
              ))}
            </div>
            <div className={styles.checkout}>
              <div className={styles.checkout__positions}>
                <div className={styles.checkout__item}>
                  <p className={styles.checkout__key}>
                    {`${pluralizePositions(totalPositions)} на сумму:`}
                  </p>
                  <p className={styles.checkout__value}>{`${commonSum}₴`}</p>
                </div>
              </div>
              {commonSum < 300 ? (
                <div className={styles.checkout__attention}>
                  <img
                    src={attention}
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                  />
                  <p style={{ fontSize: "15px" }}>
                    {`Задля оформлення замовлення на доставку додайте ще на ${
                      300 - commonSum
                    } грн.`}
                  </p>
                </div>
              ) : (
                <div className={styles.checkout__delivery}>
                  <div className={styles.checkout__item}>
                    <p className={styles.checkout__key}>Доставка:</p>
                    <p className={styles.checkout__value}>Безкоштовна</p>
                  </div>
                </div>
              )}
              <div className={styles.checkout__summary}>
                  <p className={styles.checkout__key}>До сплати:</p>
                  <p className={styles.checkout__value}>{commonSum}₴</p>
              </div>
              <div className={styles.checkout__buttons}>
                <button
                  className={`${styles.checkout__button} ${styles.checkout__button_selfPickup}`}
                >
                  Самовивіз
                </button>
                {commonSum >= 300 && (
                  <button
                    className={`${styles.checkout__button} ${styles.checkout__button_delivery}`}
                  >
                    Доставка
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
