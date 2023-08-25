import styles from './IceCream.module.scss';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { iceCreamImages } from '../../images';
import cart from '../../images/cart.png';
import NwfPage from '../../components/NwfPage/NwfPage';


const IceCreamPage = ({ items }) => {
  const { id } = useParams();

  const iceCream = items.find(item => item.id === id);

  if (!iceCream) {
    return <NwfPage />;
  }

  const iceCreamImage = iceCreamImages[iceCream.image];

  return (
  <>
    <div className={styles.ways}>
      <p>
      <Link to='/' className={styles.ways__link}>Головна </Link>
        &gt;
      <Link to='/ice-creams' className={styles.ways__link}> Морозиво </Link>
        &gt; {iceCream.title}
      </p>
  </div>
    <div className={styles.iceCreamPage}>
      <img className={styles.iceCreamPage__image} src={iceCreamImage} alt="" />
      <div className={styles.infoBlock}>
          <p className={styles.infoBlock__title}>{iceCream.title}</p>
          <p className={styles.infoBlock__weight}>{iceCream.weight}</p>
          <p className={styles.infoBlock__ingredients}>
            <p style={{ fontSize: '25px', color: '#000' }}>Склад:</p> {iceCream.ingredients}
          </p>
        <div className={styles.priceBlock}>
          <p className={styles.priceBlock__price}>{iceCream.price} грн</p>
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

export default IceCreamPage;
