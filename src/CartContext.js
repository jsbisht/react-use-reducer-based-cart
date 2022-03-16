import { createContext, useContext } from "react";
import { initialState } from "./CartReducer";

export const CartContext = createContext(initialState);

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw Error("useCart must only be used within CartContext");
  }

  return context;
};
