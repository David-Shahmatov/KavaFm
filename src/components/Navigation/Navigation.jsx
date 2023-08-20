import { useState } from "react";
import './Navigation.scss';
import pizzaIcon from '../../images/pizzaIcon.png';
import drink from '../../images/drink.png';
import frenchFries from '../../images/frenchFries.png';
import iceCream from '../../images/iceCream.png';
import salad from '../../images/salad.png';
import sandwich from '../../images/sandwich.png';

const Navigation = () => {
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

  return (
    <nav className="nav">
    <ul className="nav__list">
      <li className={`nav__item ${activeNavItem === 0 ? 'active' : ''}`} onClick={() => handleNavItemClick(0)}>
      <img src={pizzaIcon} alt="" className="nav__icon" />
        Піца
      </li>
      <li 
        className={`nav__item ${activeNavItem === 1 ? 'active' : ''}`} 
        onClick={() => handleNavItemClick(1)}
      >
        <img src={frenchFries} alt="" className="nav__icon" />
        Гарнір
      </li>
      <li 
        className={`nav__item ${activeNavItem === 2 ? 'active' : ''}`} 
        onClick={() => handleNavItemClick(2)}
      >
        <img src={salad} alt="" className="nav__icon" />
        Салати
      </li>
      <li 
        className={`nav__item ${activeNavItem === 3 ? 'active' : ''}`} 
        onClick={() => handleNavItemClick(3)}
      >
        <img src={sandwich} alt="" className="nav__icon" />
        Сендвічі
      </li>
      <li 
        className={`nav__item ${activeNavItem === 4 ? 'active' : ''}`} 
        onClick={() => handleNavItemClick(4)}
      >
        <img src={iceCream} alt="" className="nav__icon" />
        Морозиво
      </li>
      <li 
        className={`nav__item ${activeNavItem === 5 ? 'active' : ''}`} 
        onClick={() => handleNavItemClick(5)}
      >
        <img src={drink} alt="" className="nav__icon" />
        Напої
      </li>
    </ul>
  </nav>
  )
}

export default Navigation;