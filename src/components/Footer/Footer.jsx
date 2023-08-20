import './Footer.scss';
import logo from '../../images/kavaLogo.png';
import inst from '../../images/inst.png';
import facebook from '../../images/facebook.png';

const Footer = () => {
  return (
    <div className="footer">
      <a href="/">
        <img className="footer__logo" src={logo} alt="" />
      </a>
      <div className="menu">
        <p className="menu__title">Наше меню:</p>
        <ul className="menu__list">
          <li className="menu__item">Піца</li>
          <li className="menu__item">Гарнір</li>
          <li className="menu__item">Салати</li>
          <li className="menu__item">Сендвічі</li>
          <li className="menu__item">Морозиво</li>
          <li className="menu__item">Напої</li>
        </ul>
      </div>
      <div className="footer__contacts">
        <p className="footer__contacts-title">Замовляйте те смачненьке, чого вам не вистачало! 😋</p>
        <a href="tel:+38 095 568 95 93" className="footer__contacts-number">+38 095 568 95 93</a>
        <div className="socialNetworks">
          <a href="https://www.instagram.com/kava_fm_pizza/" target='_blanck'>
            <img 
              className="socialNetworks__item socialNetworks__item--marginInst" 
              src={inst} 
              alt="instagramm" 
            />
          </a>
          <a href="https://www.facebook.com/kavafm" target='_blanck'>
            <img 
              className="socialNetworks__item" 
              src={facebook} 
              alt="facebook" 
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;