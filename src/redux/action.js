//Action Types
const SET_PRODUCTS = 'SET_PRODUCTS';

//Action Creators

const setProducts = (products)=> ({ type: SET_PRODUCTS, products });

export { setProducts };
