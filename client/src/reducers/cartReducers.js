import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existingItem = state.cartItems.find(
        p => p.product === item.product
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(p =>
            p.product === item.product ? item : p
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }

    default:
      return state;
  }
};
