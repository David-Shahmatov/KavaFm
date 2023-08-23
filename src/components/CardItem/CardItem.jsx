import styles from './CardItem.module.scss';
import { Link } from 'react-router-dom';
import { pizzaImages, garnishImages } from '../../images';

const CardItem = ({ 
  weight,
  title,
  ingredients,
  price,
  image,
  id,
  type
 }) => {

  let path = `/${type}/${id}`;

  const imageSource = type === 'pizza' ? pizzaImages[image] : garnishImages[image];

  return (
    <Link to={path} className={styles.cardItem}>
      <img src={imageSource} className={styles.cardItem__image} alt={title} />
      <p className={styles.cardItem__weight}>{weight}</p>
      <p className={styles.cardItem__title}>{title}</p>
      <p className={styles.cardItem__ingredients}>
        {ingredients}
      </p>
      <div className={styles.cardItem__containerPrice}>
        <div className={styles.cardItem__price}>Ціна:</div>
        <div className={styles.cardItem__priceValue}>{price}</div>
      </div>
      <button className={styles.cardItem__button}>В кошик</button>
    </Link>
  )
}

export default CardItem;
