import { combineReducers } from 'redux';
import { SET_PRODUCTS } from './action.js';

const reducer = combineReducers({
  products: (state = [], action)=> {
    if(action.type === SET_PRODUCTS) {
      return action.products;
    }
    return state;
  },
});

export default reducer;
