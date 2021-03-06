import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { productsReducer } from './reducers/productReducers';
import { orderReducer } from "./reducers/orderReducers";

const initialState = {};
const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
}),
initialState,
composeEnhacer(applyMiddleware(thunk))
);
export default store;