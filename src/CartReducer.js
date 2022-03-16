export const initialState = {
  products: [],
  cartTotalValue: 0,
};

export const cartReducer = (currentState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...currentState,
        products: payload.products,
        cartTotalValue: payload.cartTotalValue,
      };

    default:
      break;
  }
};
