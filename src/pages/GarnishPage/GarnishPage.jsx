import styles from './GarnishPage.module.scss';
import { useParams, Link } from 'react-router-dom';
import { garnishImages } from '../../images';

const GarnishPage = ({ items }) => {
  const { id } = useParams();

  const pizza = items.find(item => item.id === id);

  if (!pizza) {
    return <div>Loading...</div>;
  }

  const pizzaImage = garnishImages[pizza.image];

  return (
    <div className={styles.garnishPage}>
      <div className={styles.garnishPage__way}>
        <p>
         <Link to='/'> Головна </Link> - <Link to='/garnish'>Гарнір</Link> - {pizza.title}</p>
      </div>
      <div className={styles.garnish__infoBlock}>
        <img className={styles.infoBlock__image} src={pizzaImage} alt="" />
        <div className={styles.infoBlock__describe}>
          <p className={styles.infoBlock__title}>{pizza.title}</p>
          <p className={styles.infoBlock__weight}>{pizza.weight}</p>
          <p className={styles.infoBlock__ingredients}>
            <p style={{ fontSize: '20px' }}>Склад:</p> {pizza.ingredients}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GarnishPage;
