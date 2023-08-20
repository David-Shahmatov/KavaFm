import './CardItem.scss';
import pizzaImages from '../../images';

const CardItem = ({ 
  weight,
  title,
  ingredients,
  price,
  image
 }) => {

  const pizzaImage = pizzaImages[image];

  return (
    <div className="cardItem">
      <img src={pizzaImage} className="cardItem__image" />
      <p className="cardItem__weight">{weight}</p>
      <p className="cardItem__title">{title}</p>
      <p className="cardItem__ingredients">
        {ingredients}
      </p>
      <div class="cardItem__container-price">
        <div class="cardItem__price">Ціна:</div>
        <div class="cardItem__price-value">{price}</div>
      </div>
      <button className="cardItem__button">В кошик</button>
  </div>
  )
}

export default CardItem;