import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { pizzaImages } from '../../images';
import cart from '../../images/cart.png';
import plus from '../../images/plus.png';
import minus from '../../images/minus.png';
import styles from './PizzaPage.module.scss';
import { useCart } from '../../context/CartContext';
import Footer from '../../components/Footer/Footer';

const PizzaPage = ({ items }) => {
  const { id } = useParams();
  const { addToCart, cartItems, removeFromCart, productCount, updateCartItemQuantity } = useCart();
  const [countOfProduct, setCountOfProduct] = useState(productCount[id] || 1);

  const pizza = items.find((item) => item.id === id);
  const pizzaPrice = pizza.price;
  const pizzaImage = pizzaImages[pizza.image];
  const totalPizzaPrice = pizzaPrice * countOfProduct;
  const itemInCart = cartItems.find((item) => item.id === id);

  const handleAddToCart = () => {
    if (!itemInCart) {
      const pizzaItem = {
        id: pizza.id,
        title: pizza.title,
        price: pizza.price,
        weight: pizza.weight,
        quantity: countOfProduct,
        image: pizza.image,
        type: pizza.type,
      };
      addToCart(pizzaItem);
    } else {
      updateCartItemQuantity(id, countOfProduct);
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCart(pizza.id);
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
          <Link to="/pizza" className={styles.ways__link}>
            {" "}
            Піца{" "}
          </Link>
          &gt; {pizza.title}
        </p>
      </div>
      <div className={styles.pizzaPage}>
        <img className={styles.pizzaPage__image} src={pizzaImage} alt="" />
        <div className={styles.infoBlock}>
          <p className={styles.infoBlock__title}>{pizza.title}</p>
          <p className={styles.infoBlock__weight}>{pizza.weight}</p>
          <p className={styles.infoBlock__ingredients}>
            <p style={{ fontSize: "25px", color: "#000" }}>Склад:</p>{" "}
            {pizza.ingredients}
          </p>
          <div className={styles.priceBlock}>
            <p className={styles.priceBlock__price}>{totalPizzaPrice} грн</p>
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
          <div className={styles.checklist}>
            <p className={styles.checklist__title}>Додатки до піци: (50гр.)</p>
            <ul className={styles.checklist__list}>
              <li className={styles.checklist__item}>
                Моцарела, пармезан (30гр.), гриби, перець, томати.
                <span className={styles.checklist__price}>20 грн</span>
              </li>
              <li className={styles.checklist__item}>
                Шинка, салямі, бекон, куряче філе, ковбаски мисливські, салямі чоррізо, дор блю.
                <span className={styles.checklist__price}>25 грн</span>
              </li>
              <li className={styles.checklist__item}>
                Лосось (50гр.)
                <span className={styles.checklist__price}>50 грн</span>
              </li>
            </ul>
          </div>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default PizzaPage;

