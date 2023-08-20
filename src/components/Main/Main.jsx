import './Main.scss';
import Splide from '../../components/Splide/Splide';
import CardList from '../CardList/CardList';
import Footer from '../Footer/Footer';
import pizzas from '../../server/pizzas.json';

const Main = () => {
  return (
    <div className="main">
      <Splide />
      <CardList items={pizzas}/>
      <Footer />
    </div>
  )
}

export default Main;