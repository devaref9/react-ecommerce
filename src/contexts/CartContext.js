import { useState } from "react";
import { createContext } from "react";

const addCartItem = (cartItems, prodcutToAdd) => {
  if (!cartItems.find((item) => item.id === prodcutToAdd.id))
    return [...cartItems, prodcutToAdd];
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(["item1", "item2"]);
  const addItemToCart = (prodcutToAdd) => {
    setCartItems(addCartItem(cartItems, prodcutToAdd));
  };

  const value = { cartItems, addItemToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
