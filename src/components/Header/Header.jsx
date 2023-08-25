import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../images/kavaLogo.png';
import gps from '../../images/gps.png';
import clock from '../../images/clock.png';
import phone from '../../images/phone.png';
import cart from '../../images/cart.png';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to='/'>
          <img 
            src={logo}
            className={styles.header__logo} 
          />        
        </Link>
        <a 
          href='https://goo.gl/maps/BnCSJ128eZHWr19x7'
          className={`${styles.header__item} , ${styles.location}`}
          target="_blank"
        >
          <img src={gps} alt="" className={styles.header__gps}/>
          <p className={styles.header__city}>Дніпро</p>
        </a>
        <div className={`${styles.header__item} ${styles.schedule}`}>
          <img src={clock} className={styles.header__clock}/>
          <p className={styles.schedule__text}>
            Працюємо з 10:00 до 20:00 <br/> 
            <p style={{
              color: 'grey',
              fontSize: '15px'
            }}>Без вихідних</p>
          </p>
        </div>
        <div className={`${styles.header__item } ${styles.contacts}`}>
          <img src={phone} className={styles.header__phone} />
          <a href="tel:+38 095 568 95 93" className={styles.phoneNumber}>+38 095 568 95 93</a>
        </div>
        <div className={`${styles.header__item} ${styles.cartBlock}`}>
          <img src={cart} alt="" className={styles.cart} />
          <p className={styles.cartTitle}>Кошик</p>
        </div>
      </div>
      <Navigation />
    </div>
  )
}

export default Header;
