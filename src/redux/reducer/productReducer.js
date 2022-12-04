import { ADD_TO_CART, REMOVE_FORM_CART } from "../actionType/actionType";

const initializeState = {
  cart: [],
};
export const reducer = (state = initializeState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FORM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product._id !== action.payload._id),
      };
    default:
      return state;
  }
};
