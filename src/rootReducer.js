import { ADD, REMOVE } from "./actionTypes";
import data from "./data.json"

const INITIAL_STATE = { prodList: data.products, cart: [] };

function rootReducer(state = INITIAL_STATE, action) {
 
  switch (action.type) {
    case ADD:
      return { ...state, cart: [...state.cart, action.payload] };

    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((i) => i !== action.payload)
      };
    
    default:
      return state;
  }
}

export default rootReducer;
