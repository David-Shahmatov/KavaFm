import React from 'react';
import styles from './CardList.module.scss';
import CardItem from '../CardItem/CardItem';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const CardList = ({ items, typePage }) => {
  if (typeof items === 'string') {
    return <div>Ошибка: items не является массивом объектов Item.</div>;
  }
  return (
    <>
      <div className={styles.ways}>
        {typePage && (
          <>
            <Link to='/' className={styles.ways__link}>Головна </Link>
            &gt;
            <p className={styles.ways__link}> {typePage}</p>
          </>
        )}
      </div>
      <div className={styles.cardList}>
        {
          items.map((item) => (
            <CardItem
              key={item.id}
              title={item.title}
              weight={item.weight}
              ingredients={item.ingredients}
              price={item.price}
              image={item.image}
              id={item.id}
              type={item.type}
              quantity={item.quantity}
            />
          ))
        }
      </div>
      <Footer />
    </>
  );
}

export default CardList;
