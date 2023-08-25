import styles from './Sandwich.module.scss';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { sandwicheImages } from '../../images';
import cart from '../../images/cart.png';
import NwfPage from '../../components/NwfPage/NwfPage';


const SandwichPage = ({ items }) => {
  const { id } = useParams();

  const sandwich = items.find(item => item.id === id);

  if (!sandwich) {
    return <NwfPage />;
  }

  const sandwichImage = sandwicheImages[sandwich.image];

  return (
  <>
    <div className={styles.ways}>
      <p>
      <Link to='/' className={styles.ways__link}>Головна </Link>
        &gt;
      <Link to='/sandwiches' className={styles.ways__link}> Сендвічі </Link>
        &gt; {sandwich.title}
      </p>
  </div>
    <div className={styles.sandwichPage}>
      <img className={styles.sandwichPage__image} src={sandwichImage} alt="" />
      <div className={styles.infoBlock}>
          <p className={styles.infoBlock__title}>{sandwich.title}</p>
          <p className={styles.infoBlock__weight}>{sandwich.weight}</p>
          <p className={styles.infoBlock__ingredients}>
            <p style={{ fontSize: '25px', color: '#000' }}>Склад:</p> {sandwich.ingredients}
          </p>
        <div className={styles.priceBlock}>
          <p className={styles.priceBlock__price}>{sandwich.price} грн</p>
          <div className={styles.cart}>
            <img src={cart} alt="" className={styles.cart__image} />
            <p className={styles.cart__title}>В кошик</p>
        </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default SandwichPage;
