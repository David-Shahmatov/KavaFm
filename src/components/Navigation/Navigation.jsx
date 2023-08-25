import styles from './Navigation.module.scss';
import { NavLink, useLocation } from "react-router-dom";
import classNames from 'classnames';
import pizzaIcon from '../../images/pizzaIcon.png';
import drink from '../../images/drink.png';
import frenchFriesIcon from '../../images/frenchFries-icon.png';
import iceCream from '../../images/iceCream.png';
import salad from '../../images/salad.png';
import sandwichIcon from '../../images/sandwichIcon.png';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <NavLink
          className={classNames({
            [styles.active]: location.pathname === '/pizza'
          })}
          to="/pizza" 
          style={{ textDecoration: 'none' }}
       >
          <li className={styles.nav__item}>
            <img src={pizzaIcon} alt="" className={styles.nav__icon} />
            Піца
          </li>
        </NavLink>
        <NavLink 
          to="/garnish" 
          className={classNames({
            [styles.active]: location.pathname === '/garnish'
          })}
          style={{ textDecoration: 'none' }}
        >
          <li className={styles.nav__item}>
            <img src={frenchFriesIcon} alt="" className={styles.nav__icon} />
            Гарнір
          </li>
        </NavLink>
        <NavLink 
          to="/salads" 
          className={classNames({
            [styles.active]: location.pathname === '/salads'
          })}
          style={{ textDecoration: 'none' }}
        >
          <li className={styles.nav__item}>
            <img src={salad} alt="" className={styles.nav__icon} />
            Салати
          </li>
        </NavLink>
        <NavLink 
          to="/sandwiches" 
          className={classNames({
            [styles.active]: location.pathname === '/sandwiches'
          })}
          style={{ textDecoration: 'none' }}
        >
          <li className={styles.nav__item}>
            <img src={sandwichIcon} alt="" className={styles.nav__icon} />
            Сендвічі
          </li>
        </NavLink>
        <NavLink 
          to="/ice-creams" 
          className={classNames({
            [styles.active]: location.pathname === '/ice-creams'
          })}
          style={{ textDecoration: 'none' }}
        >
          <li className={styles.nav__item}>
            <img src={iceCream} alt="" className={styles.nav__icon} />
            Морозиво
          </li>
        </NavLink>
        <NavLink 
          to="/drinks" 
          className={classNames({
            [styles.active]: location.pathname === '/drinks'
          })}
          style={{ textDecoration: 'none' }}>
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
