import { DECREASE_ITEMS_COUNT, DELETE_PRODUCT, ADD_PRODUCT, INCREASE_ITEMS_COUNT } from "../types/cart-types";

const initialState = {
    itemsInCart: [],
};

const handlersProduct = {
    [ADD_PRODUCT]: (state, action) => ({ ...state, itemsInCart: [...state.itemsInCart, action.item] }),
    [DELETE_PRODUCT]: (state, action) => ({ ...state, itemsInCart: [...state.itemsInCart.filter((i) => i.id !== action.id)] }),
    [INCREASE_ITEMS_COUNT]: (state, action) => ({
        ...state,
        itemsInCart: state.itemsInCart.map(item => {
            if (item.id === action.id) {
                return { ...item, count: item.count + 1, }
            }
            return item;
        }),
    }),
    [DECREASE_ITEMS_COUNT]: (state, action) => ({
        ...state,
        itemsInCart: state.itemsInCart.map(item => {
            if (item.id === action.id) {
                return { ...item, count: item.count - 1, }
            }
            return item;
        }),
    }),
};

export const CartReducer = (state = initialState, action) => {
    if (handlersProduct[action.type]) {
        return handlersProduct[action.type](state, action);
    }
    return state;
};