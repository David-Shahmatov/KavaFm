import styles from './DrinkPage.module.scss';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { drinkImages } from '../../images';
import cart from '../../images/cart.png';
import NwfPage from '../../components/NwfPage/NwfPage';


const DrinkPage = ({ items }) => {
  const { id } = useParams();

  const drink = items.find(item => item.id === id);

  if (!drink) {
    return <NwfPage />;
  }

  const drinkImage = drinkImages[drink.image];

  return (
  <>
    <div className={styles.ways}>
      <p>
      <Link to='/' className={styles.ways__link}>Головна </Link>
        &gt;
      <Link to='/drinks' className={styles.ways__link}> Напої </Link>
        &gt; {drink.title}
      </p>
  </div>
    <div className={styles.drinkPage}>
      <img className={styles.drinkPage__image} src={drinkImage} alt="" />
      <div className={styles.infoBlock}>
          <p className={styles.infoBlock__title}>{drink.title}</p>
          <p className={styles.infoBlock__weight}>{drink.weight}</p>
        <div className={styles.priceBlock}>
          <p className={styles.priceBlock__price}>{drink.price} грн</p>
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

export default DrinkPage;
