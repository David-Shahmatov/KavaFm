// import "./styles.scss";
// import { useState, useEffect } from "react";
// import Header from "./components/Header/Header";
// import Main from "./components/Main/Main";
// import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
// import cart from "./images/cart.png";
// import { Link } from "react-router-dom";
// import { useCart } from "./context/CartContext";

// function App() {
//   const [burgerMenuSelected, setBurgerMenuSelected] = useState(false);
//   const [commonSum, setCommonSum] = useState(0);
//   const { cartItems, cartIsOpen, setCartIsOpen } = useCart();

//   useEffect(() => {
//     if (!cartIsOpen) { // Убедитесь, что корзина закрыта перед обновлением commonSum
//       let sum = 0;
//       for (const item of cartItems) {
//         sum += item.price * item.quantity;
//       }
//       setCommonSum(sum);
//     }
//   }, [cartItems, cartIsOpen]);


//   return (
//     <div>
//       {burgerMenuSelected ? (
//         <BurgerMenu
//           setBurgerMenuSelected={setBurgerMenuSelected}
//           burgerMenuSelected={burgerMenuSelected}
//         />
//       ) : (
//         <>
//           <Header
//             setBurgerMenuSelected={setBurgerMenuSelected}
//             burgerMenuSelected={burgerMenuSelected}
//           />
//           <Main />
//         </>
//       )}
//       {cartItems.length === 0 ? (
//         <Link
//           to="/cart"
//           style={{
//             textDecoration: "none",
//           }}
//           onClick={() => setCartIsOpen(!cartIsOpen)}
//         >
//           <div className="cartForMobile">
//             <img src={cart} alt="" className="cartForMobile__image" />
//             <p className="cartForMobile__title">Кошик</p>
//           </div>
//         </Link>
//       ) : (
//         <Link
//           to="/cart"
//           style={{
//             textDecoration: "none",
//           }}
//           onClick={() => setCartIsOpen(!cartIsOpen)}

//         >
//           <div className="cartForMobile">
//             <p className="cartForMobile__title">{commonSum}₴</p>
//           </div>
//         </Link>
//       )}
//     </div>
//   );
// }

// export default App;
import "./styles.scss";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import cart from "./images/cart.png";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "./context/CartContext";

function App() {
  const [burgerMenuSelected, setBurgerMenuSelected] = useState(false);
  const [commonSum, setCommonSum] = useState(0);
  const { cartItems, cartIsOpen, setCartIsOpen } = useCart();
  const location = useLocation();

  const isCartPage = location.pathname === "/cart";

  useEffect(() => {
    if (!cartIsOpen) {
      let sum = 0;
      for (const item of cartItems) {
        sum += item.price * item.quantity;
      }
      setCommonSum(sum);
    }
  }, [cartItems, cartIsOpen]);

  const toggleCart = () => {
    setCartIsOpen(!cartIsOpen);
  };

  const renderIsCartEmpty = () => {
    if (!cartIsOpen && cartItems.length === 0) {
      return (
        <Link
          to="/cart"
          style={{
            textDecoration: "none",
          }}
          onClick={toggleCart}
        >
          <div className="cartForMobile">
            <img src={cart} alt="" className="cartForMobile__image" />
            <p className="cartForMobile__title">Кошик</p>
          </div>
        </Link>
      );
    } else {
      return (
        <Link
          to="/cart"
          style={{
            textDecoration: "none",
          }}
          onClick={toggleCart}
        >
          <div className="cartForMobile">
            <p className="cartForMobile__title">{commonSum}₴</p>
          </div>
        </Link>
      );
    }
  }
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
      {!isCartPage && renderIsCartEmpty()}
      
    </div>
  );
}

export default App;
