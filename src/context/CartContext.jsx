import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [productCount, setProductCount] = useState({});

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
    setProductCount((prevProductCount) => ({
      ...prevProductCount,
      [item.id]: item.quantity,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
  };

  const updateCartItemQuantity = (id, quantity) => {
    setProductCount((prevProductCount) => ({
      ...prevProductCount,
      [id]: quantity,
    }));

    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  const contextValue = {
    cartItems,
    productCount,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
