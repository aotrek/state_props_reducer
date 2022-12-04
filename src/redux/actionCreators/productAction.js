import { ADD_TO_CART, REMOVE_FORM_CART } from "../actionType/actionType"

export const addToCart = (data) => {
    return {
      type: ADD_TO_CART,
      payload: data,
    };
}
export const removeToCart = (product) => {
    return {
        type: REMOVE_FORM_CART,
        payload: product,
    }
}