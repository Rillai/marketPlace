const ADD_PRODUCT = "ADD_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const INCREASE_ITEMS_COUNT = "INCREASE_ITEMS_COUNT";
const DECREASE_ITEMS_COUNT = "DECREASE_ITEMS_COUNT";

let initialState = {
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
export const addProductAction = (item) => ({ type: ADD_PRODUCT, item })
export const deleteProductAction = (id) => ({ type: DELETE_PRODUCT, id })
export const increaseItemsCountAction = (id) => ({ type: INCREASE_ITEMS_COUNT, id })
export const decreaseItemsCountAction = (id) => ({ type: DECREASE_ITEMS_COUNT, id })