import styles from './SaladPage.module.scss';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { saladsImages } from '../../images';
import cart from '../../images/cart.png';


const SaladPage = ({ items }) => {
  const { id } = useParams();

  const salad = items.find(item => item.id === id);

  if (!salad) {
    return <span class="loader"></span>;
  }

  const saladImage = saladsImages[salad.image];

  return (
  <>
    <div className={styles.ways}>
    <p>
    <Link to='/' className={styles.ways__link}>Головна </Link>
      &gt;
    <Link to='/salads' className={styles.ways__link}> Салати </Link>
      &gt; {salad.title}
    </p>
  </div>
    <div className={styles.saladsPage}>
      <img className={styles.saladsPage__image} src={saladImage} alt="" />
      <div className={styles.infoBlock}>
          <p className={styles.infoBlock__title}>{salad.title}</p>
          <p className={styles.infoBlock__weight}>{salad.weight}</p>
          <p className={styles.infoBlock__ingredients}>
            <p style={{ fontSize: '25px', color: '#000' }}>Склад:</p> {salad.ingredients}
          </p>
        <div className={styles.priceBlock}>
          <p className={styles.priceBlock__price}>{salad.price} грн</p>
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

export default SaladPage;
