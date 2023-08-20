import './CardList.scss';
import CardItem from '../CardItem/CardItem';

const CardList = ({ items }) => {
  return (
    <div className="cardList">
    {
      items.map((item) => (
        <>
        <CardItem
          title={item.title}
          weight={item.weight}
          ingredients={item.ingredients}
          price={item.price}
          image={item.image}
        />
        <CardItem
        title={item.title}
        weight={item.weight}
        ingredients={item.ingredients}
        price={item.price}
        image={item.image}
      />       
        </>
      ))
    }
    </div>
  )
}

export default CardList;