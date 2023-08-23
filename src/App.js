import { useState } from 'react';
import classNames from 'classnames';
import './styles.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import CardItem from './components/CardItem/CardItem';
import mainPageData from './server/mainPageData.json';
import pizzas from './server/pizzas.json';
import CardList from './components/CardList/CardList';
import PizzaPage from './pages/PizzaPage/PizzaPage';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={
      classNames(
        'lightMode', 
        {'darkMode': isDarkMode}
      )
    }
    >
      <Header isDark={isDarkMode} toggleMethod={toggleTheme} />
      <Main />
    </div>
  );
}

export default App;

