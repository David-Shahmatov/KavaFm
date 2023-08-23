import styles from './PizzaPage.module.scss';
import { useParams, Link } from 'react-router-dom';
import { pizzaImages } from '../../images';
import cart from '../../images/cart.png';

const PizzaPage = ({ items }) => {
  const { id } = useParams();

  const pizza = items.find(item => item.id === id);

  if (!pizza) {
    return <div>Loading...</div>;
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
        <div className={styles.infoBlock__describe}>
          <p className={styles.infoBlock__title}>{pizza.title}</p>
          <p className={styles.infoBlock__weight}>{pizza.weight}</p>
          <p className={styles.infoBlock__ingredients}>
            <p style={{ fontSize: '25px' }}>Склад:</p> {pizza.ingredients}
          </p>
        </div>
        <div className={styles.cartBlock}>
          <img src={cart} alt="" className="{styles.cart}" />
          <p className={styles.cartTitle}>Кошик</p>
      </div>
      </div>
    </div>
    </>
  );
}

export default PizzaPage;
