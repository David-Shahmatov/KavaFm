import styles from './Navigation.module.scss';
import { NavLink } from "react-router-dom";
import pizzaIcon from '../../images/pizzaIcon.png';
import drink from '../../images/drink.png';
import frenchFriesIcon from '../../images/frenchFries-icon.png';
import iceCream from '../../images/iceCream.png';
import salad from '../../images/salad.png';
import sandwich from '../../images/sandwich.png';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <NavLink to="/pizza" style={{ textDecoration: 'none', color: '#fff' }} >
          <li className={styles.nav__item}>
            <img src={pizzaIcon} alt="" className={styles.nav__icon} />
            Піца
          </li>
        </NavLink>
        <NavLink to="/garnish" style={{ textDecoration: 'none' }}>
          <li className={styles.nav__item}>
            <img src={frenchFriesIcon} alt="" className={styles.nav__icon} />
            Гарнір
          </li>
        </NavLink>
        <NavLink to="/salads" style={{ textDecoration: 'none' }}>
          <li className={styles.nav__item}>
            <img src={salad} alt="" className={styles.nav__icon} />
            Салати
          </li>
        </NavLink>
        <NavLink to="/sandwiches" style={{ textDecoration: 'none' }}>
          <li className={styles.nav__item}>
            <img src={sandwich} alt="" className={styles.nav__icon} />
            Сендвічі
          </li>
        </NavLink>
        <NavLink to="/ice-cream" style={{ textDecoration: 'none' }}>
          <li className={styles.nav__item}>
            <img src={iceCream} alt="" className={styles.nav__icon} />
            Морозиво
          </li>
        </NavLink>
        <NavLink to="/drinks" style={{ textDecoration: 'none' }}>
          <li className={styles.nav__item}>
            <img src={drink} alt="" className={styles.nav__icon} />
            Напої
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navigation;