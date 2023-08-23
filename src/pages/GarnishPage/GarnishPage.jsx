import styles from './GarnishPage.module.scss';
import { useParams, Link } from 'react-router-dom';
import { garnishImages } from '../../images';
import cart from '../../images/cart.png';


const GarnishPage = ({ items, typePage }) => {
  const { id } = useParams();

  const garnish = items.find(item => item.id === id);

  if (!garnish) {
    return <span class="loader"></span>;
  }

  const garnishImage = garnishImages[garnish.image];

  return (
  <>
    <div className={styles.ways}>
    <p>
    <Link to='/' className={styles.ways__link}>Головна </Link>
      &gt;
    <Link to='/garnish' className={styles.ways__link}> {typePage} </Link>
      &gt; {garnish.title}
    </p>
  </div>
    <div className={styles.garnishPage}>
      <img className={styles.garnishPage__image} src={garnishImage} alt="" />
      <div className={styles.infoBlock}>
          <p className={styles.infoBlock__title}>{garnish.title}</p>
          <p className={styles.infoBlock__weight}>{garnish.weight}</p>
          <p className={styles.infoBlock__ingredients}>
            <p style={{ fontSize: '25px', color: '#000' }}>Склад:</p> {garnish.ingredients}
          </p>
        <div className={styles.priceBlock}>
          <p className={styles.priceBlock__price}>{garnish.price}</p>
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

export default GarnishPage;
