import styles from './GarnishPage.module.scss';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { garnishImages } from '../../images';
import cart from '../../images/cart.png';


const GarnishPage = ({ items }) => {
  const { id } = useParams();

  const garnish = items.find(item => item.id === id);

  const garnishPrice = garnish.price;
  const [additionsPrice, setAdditionsPrice] = useState(0);

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setAdditionsPrice(additionsPrice + 5);
    } else {
      setAdditionsPrice(additionsPrice - 5);
    }
  };

  if (!garnish) {
    return <span class="loader"></span>;
  }

  const garnishImage = garnishImages[garnish.image];
  const totalGarnishPrice = garnishPrice + additionsPrice;

  return (
  <>
    <div className={styles.ways}>
    <p>
    <Link to='/' className={styles.ways__link}>Головна </Link>
      &gt;
    <Link to='/garnish' className={styles.ways__link}> Гарнір </Link>
      &gt; {garnish.title}
    </p>
  </div>
    <div className={styles.garnishPage}>
      <img className={styles.garnishPage__image} src={garnishImage} alt="" />
      <div className={styles.infoBlock}>
          <p className={styles.infoBlock__title}>{garnish.title}</p>
          <p className={styles.infoBlock__weight}>{garnish.weight}</p>
          <p className={styles.infoBlock__ingredients}>
            <p style={{ fontSize: '25px', color: '#000' }}>Склад:</p> {garnish.ingredients}
          </p>
        <div className={styles.priceBlock}>
          <p className={styles.priceBlock__price}>{totalGarnishPrice} грн</p>
          <div className={styles.cart}>
            <img src={cart} alt="" className={styles.cart__image} />
            <p className={styles.cart__title}>В кошик</p>
        </div>
        </div>
        <div className={styles.checkboxContainer}>
          <p className={styles.checkbox__title}>Додатки до гарніру: (50гр.)</p>

          <div>
            <div class={styles.checkbox}>
                <input 
                  type="checkbox" 
                  id="option1" 
                  name="options" 
                  value="option1"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="option1">Соус сирний
                  <p style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#efb729'
                  }}> 5 грн </p>
                </label>
            </div>

            <div class={styles.checkbox}>
                <input 
                  type="checkbox" 
                  id="option2" 
                  name="options" 
                  value="option2" 
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="option2">Соус каррі
                  <p style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#efb729'
                    }}> 5 грн</p>
                </label>
            </div>

            <div class={styles.checkbox}>
                <input 
                  type="checkbox" 
                  id="option3" 
                  name="options" 
                  value="option3"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="option3">Кетчуп
                  <p style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#efb729'
                  }}> 5 грн</p>
                </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default GarnishPage;
