import './styles.scss';
import { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';

function App() {
  const [burgerMenuSelected, setBurgerMenuSelected] = useState(false);

  return (
    <div>
      {
        burgerMenuSelected ? (
          <BurgerMenu
            setBurgerMenuSelected={setBurgerMenuSelected}
            burgerMenuSelected={burgerMenuSelected}
          />
         ) : (
          <>
            <Header 
              setBurgerMenuSelected={setBurgerMenuSelected}
              burgerMenuSelected={burgerMenuSelected}
            />
            <Main />
          </>
         )
      }
    </div>
  );
}

export default App;

