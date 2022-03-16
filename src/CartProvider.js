import { useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer, initialState } from "./CartReducer";

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    const productsInCart = state.products.concat(product);
    const cartTotalValue = productsInCart.reduce(
      (currentResult, currentItem) => currentResult + currentItem.price,
      0
    );
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: productsInCart,
        cartTotalValue,
      },
    });
  };

  const value = {
    cartTotalValue: state.cartTotalValue,
    products: state.products,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
