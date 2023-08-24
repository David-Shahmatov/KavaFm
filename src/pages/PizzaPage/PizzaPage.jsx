import styles from './PizzaPage.module.scss';
import { useParams, Link } from 'react-router-dom';
import { pizzaImages } from '../../images';
import NwfPage from '../../components/NwfPage/NwfPage';
import cart from '../../images/cart.png';
import { useState } from 'react';

const PizzaPage = ({ items }) => {
  const { id } = useParams();

  const pizza = items.find(item => item.id === id);

  const pizzaPrice = pizza.price;
  const [additionsPrice, setAdditionsPrice] = useState(0);

  const handleCheckboxChange = (event, price) => {
    if (event.target.checked) {
      setAdditionsPrice(additionsPrice + price);
    } else {
      setAdditionsPrice(additionsPrice - price);
    }
  };

  if (!pizza) {
    return <NwfPage />;
  }

  const pizzaImage = pizzaImages[pizza.image];
  const totalPizzaPrice = pizzaPrice + additionsPrice; 

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
        <p className={styles.infoBlock__title}>{pizza.title}</p>
        <p className={styles.infoBlock__weight}>{pizza.weight}</p>
        <p className={styles.infoBlock__ingredients}>
          <p style={{ fontSize: '25px', color: '#000' }}>Склад:</p> {pizza.ingredients}
        </p>
        <div className={styles.priceBlock}>
          <p className={styles.priceBlock__price}>{totalPizzaPrice} грн</p>
          <div className={styles.cart}>
            <img src={cart} alt="" className={styles.cart__image} />
            <p className={styles.cart__title}>В кошик</p>
          </div>
        </div>
        <div className={styles.checkboxContainer}>
          <p className={styles.checkbox__title}>Додатки до піци: (50гр.)</p>

          <div>
            <div class={styles.checkbox}>
                <input 
                  type="checkbox" 
                  id="option1" 
                  name="options" 
                  value="option1"
                  onChange={(event) => handleCheckboxChange(event, 20)}
                />
                <label htmlFor="option1">Моцарела, пармезан (30гр.), гриби, перець, томати. 
                  <p style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#efb729'
                  }}> 20 грн </p>
                </label>
            </div>

            <div class={styles.checkbox}>
                <input 
                  type="checkbox" 
                  id="option2" 
                  name="options" 
                  value="option2" 
                  onChange={(event) => handleCheckboxChange(event, 25)}
                />
                <label htmlFor="option2">Шинка, салямі, бекон, куряче філе, ковбаски мисливські, салямі чоррізо, дор блю. 
                  <p style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#efb729'
                    }}> 25 грн</p>
                </label>
            </div>

            <div class={styles.checkbox}>
                <input 
                  type="checkbox" 
                  id="option3" 
                  name="options" 
                  value="option3"
                  onChange={(event) => handleCheckboxChange(event, 50)}
                />
                <label htmlFor="option3">Лосось (50гр.) 
                  <p style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#efb729'
                  }}> 50 грн</p>
                </label>
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default PizzaPage;
