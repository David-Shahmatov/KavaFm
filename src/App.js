import "./styles.scss";
import React, { useState } from "react";
import Main from "./components/Main/Main";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
    const [burgerMenuSelected, setBurgerMenuSelected] = useState(false);

    return (
        <>
            <head>
                <link rel="stylesheet" href="path/to/atropos.css" />
            </head>
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
                        <Footer />
                    </>
                )}
            </div>
        </>
    );
}

export default App;
