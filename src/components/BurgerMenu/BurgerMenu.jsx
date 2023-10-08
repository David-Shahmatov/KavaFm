import styles from "./BurgerMenu.module.scss";
import kavaLogo from "../../images/kavaLogo.png";
import cross from "../../images/cross.png";
import cart from "../../images/cart.png";
import phone from "../../images/phone.png";
import { Link, NavLink } from "react-router-dom";

const BurgerMenu = (  {
    setBurgerMenuSelected,
    burgerMenuSelected
}) => {
  const handlerClick = (value) => setBurgerMenuSelected(!value);

  return (
    <div className={styles.burgerMenu}>
      <div className={styles.burgerMenu__top}>
        <img src={kavaLogo} className={styles.burgerMenu__logo} />
          <img 
            onClick={() => handlerClick(burgerMenuSelected)}
            src={cross} 
            className={styles.burgerMenu__cross} 
          />
      </div>
      <p className={styles.burgerMenu__title}>Меню</p>
      <ul className={styles.nav}>
        <NavLink 
          to='/pizza' 
          className={styles.nav__item}
          onClick={() => handlerClick(burgerMenuSelected)}
        >
          <li>Піца</li>
        </NavLink>
        <NavLink 
          to='/garnish' 
          className={styles.nav__item}
          onClick={() => handlerClick(burgerMenuSelected)}
        >
          <li>Гарнір</li>
        </NavLink>
        <NavLink 
          to='/salads' 
          className={styles.nav__item}
          onClick={() => handlerClick(burgerMenuSelected)}
        >
          <li>Салати</li>
        </NavLink>
        <NavLink 
          to='/sandwiches' 
          className={styles.nav__item}
          onClick={() => handlerClick(burgerMenuSelected)}
        >
          <li>Сендвічі</li>
        </NavLink>
        <NavLink 
          to='/ice-creams' 
          className={styles.nav__item}
          onClick={() => handlerClick(burgerMenuSelected)}
        >
          <li>Морозиво</li>
        </NavLink>
        <NavLink 
          to='/drinks' 
          className={styles.nav__item}
          onClick={() => handlerClick(burgerMenuSelected)}
        >
          <li>Напої</li>
        </NavLink>
      </ul>
      <div className={styles.burgerMenu__bottom}>
        <Link to='tel:+38 095 568 95 93'>
          <img src={phone} className={styles.burgerMenu__phone} />
        </Link>
        <Link to='/cart'>
          <img
            onClick={() => handlerClick(burgerMenuSelected)}
            src={cart} 
            className={styles.burgerMenu__cart} 
          />
        </Link>
      </div>
    </div>
  );
};

export default BurgerMenu;
