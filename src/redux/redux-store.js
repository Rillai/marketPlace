import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk"
import { ContentReducer } from "./content-reducer";
import { CartReducer } from './cart-reducer';
import { OrderReducer } from './order-reducer';

let reducers = combineReducers({
    content: ContentReducer,
    cart: CartReducer,
    order: OrderReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
export default store;