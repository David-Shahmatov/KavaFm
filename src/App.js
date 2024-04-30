import "./styles.scss";
import React, { useState } from "react";
import Main from "./components/Main/Main";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import  Header from "./components/Header/Header";
function App() {
  const [burgerMenuSelected, setBurgerMenuSelected] = useState(false);

  return (
    <div>
      {burgerMenuSelected ? (
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
      )}
    </div>
  );
}

export default App;
