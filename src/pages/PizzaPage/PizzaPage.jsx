import styles from './PizzaPage.module.scss';
import { useParams, Link } from 'react-router-dom';
import { pizzaImages } from '../../images';
import NwfPage from '../../components/NwfPage/NwfPage';
import cart from '../../images/cart.png';

const PizzaPage = ({ items }) => {
  const { id } = useParams();

  const pizza = items.find(item => item.id === id);

  if (!pizza) {
    return <NwfPage />;
  }

  const pizzaImage = pizzaImages[pizza.image];

  return (
    <>
    <div className={styles.ways}>
      <p>
      <Link to='/' className={styles.ways__link}>Головна </Link>
        &gt;
      <Link to='/pizza' className={styles.ways__link}> Піца </Link>
        &gt; {pizza.title}
      </p>
    </div>
    <div className={styles.pizzaPage}>
        <img className={styles.pizzaPage__image}  src={pizzaImage} alt="" />
      <div className={styles.infoBlock}>
          <p className={styles.infoBlock__title}>{pizza.title}</p>
          <p className={styles.infoBlock__weight}>{pizza.weight}</p>
          <p className={styles.infoBlock__ingredients}>
            <p style={{ fontSize: '25px', color: '#000' }}>Склад:</p> {pizza.ingredients}
          </p>
        <div className={styles.priceBlock}>
          <p className={styles.priceBlock__price}>{pizza.price}</p>
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

export default PizzaPage;
