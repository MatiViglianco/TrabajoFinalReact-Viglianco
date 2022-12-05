import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  isInCart: () => {},
  addToCart: () => {},
});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const getFromCart = (id) => {
    return cart.find((ord) => ord.id === id);
  };

  const isInCart = (id) => {
    return id !== undefined ? getFromCart(id) : undefined;
  };

  const addToCart = (obj) => {
    if (isInCart(obj && obj.id)) {
      console.log("elemento con id ya existente");
      return;
    }
    setCart([...cart], obj);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
