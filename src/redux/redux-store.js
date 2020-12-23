import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk"
import { ProductsPageReducer } from './reducers/productsPage-reducer';
import { CartReducer } from './reducers/cart-reducer';
import { OrderReducer } from './reducers/order-reducer';

const reducers = combineReducers({
    productsPage: ProductsPageReducer,
    cart: CartReducer,
    order: OrderReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
export default store;