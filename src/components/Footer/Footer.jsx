import { Link, NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import logo from '../../images/kavaLogo.png';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link to="/">
        <img className={styles.footer__logo} src={logo} alt="" />
      </Link>
      <div className={styles.footer__main}>
        <div className={styles.menu}>
          <p className={styles.menu__title}>Наше меню:</p>
          <ul className={styles.menu__list}>
            <NavLink className={styles.menu__link} to='/pizza'>
              <li className={styles.menu__item}>Піца</li>
            </NavLink>
            <NavLink className={styles.menu__link} to='/garnish'>
              <li className={styles.menu__item}>Гарнір</li>
            </NavLink>
            <NavLink className={styles.menu__link} to='/salads'>
              <li className={styles.menu__item}>Салати</li>
            </NavLink>
            <NavLink className={styles.menu__link} to='/sandwiches'>
              <li className={styles.menu__item}>Сендвічі</li>
            </NavLink>
            <NavLink className={styles.menu__link} to='/ice-creams'>
              <li className={styles.menu__item}>Морозиво</li>
            </NavLink>
            <NavLink className={styles.menu__link} to='/drinks'>
              <li className={styles.menu__item}>Напої</li>
            </NavLink>
          </ul>
        </div>
        <div className={styles.footer__contacts}>
          <p className={styles.footer__contactsTitle}>Замовляйте те смачненьке, чого вам не вистачало! 😋</p>
          <a href="tel:+38 095 568 95 93" className={styles.footer__contactsNumber}>+38 095 568 95 93</a>
        </div>
        </div>
    </div>
  )
}

export default Footer;