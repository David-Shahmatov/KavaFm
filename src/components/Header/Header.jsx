import { useState } from 'react';
import './Header.scss';
import logo from '../../images/kavaLogo.png';
import gps from '../../images/gps.png';
import clock from '../../images/clock.png';
import phone from '../../images/phone.png';
import sun from '../../images/sun.png';
import moon from '../../images/moon.png';
import cart from '../../images/cart.png';
import Navigation from '../Navigation/Navigation';

const Header = ({ toggleMethod, isDark }) => {
  return (
    <div className="container">
      <div className="header">
        <img 
          src={logo}
          className="header__logo" 
        />
        <a 
          href='https://goo.gl/maps/BnCSJ128eZHWr19x7'
          className="header__item location"
          target="_blank"
        >
          <img src={gps} alt="" className='header__gps'/>
          <p className="header__city">Дніпро</p>
        </a>
        <div className="header__item schedule">
          <img src={clock} className='header__clock'/>
          <p className="schedule__text">
            Працюємо з 10:00 до 20:00 <br/> 
            <p style={{
              color: 'grey',
              fontSize: '15px'
            }}>Без вихідних</p>
          </p>
        </div>
        <div className="header__item contacts">
          <img src={phone} className='header__phone' />
          <a href="tel:+38 095 568 95 93" className="phoneNumber">+38 095 568 95 93</a>
        </div>
        {isDark ? 
          <img 
            src={sun} 
            alt="sun" 
            className='toogler'
            onClick={ toggleMethod }
            title='Змінити тему'
          />
          :
          <img 
            src={moon} 
            alt="moon" 
            className='toogler'
            title='Змінити тему'
            onClick={ toggleMethod }
          />
        }
        <div className="header__item cart-block">
          <img src={cart} alt="" className="cart" />
          <p className='cart-title'>Кошик</p>
        </div>
      </div>
      <Navigation />
    </div>
  )
}

export default Header;
