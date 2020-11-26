const ADD_PRODUCT = "ADD_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const INCREASE_ITEMS_COUNT = "INCREASE_ITEMS_COUNT";
const DECREASE_ITEMS_COUNT = "DECREASE_ITEMS_COUNT";

let initialState = {
    itemsInCart: [],
    itemsCount: 0
};
export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return { ...state, itemsInCart: [...state.itemsInCart, action.item], itemsCount: state.itemsCount + 1 }
        case DELETE_PRODUCT:
            return { ...state, itemsInCart: [...state.itemsInCart.filter((i) => i.id !== action.id)], itemsCount: state.itemsCount - 1 }
        case INCREASE_ITEMS_COUNT:
            return {
                ...state,
                itemsCount: state.itemsCount + 1,
                itemsInCart: state.itemsInCart.map((i) => {
                    if (i.id === action.id) {
                        return { ...i, count: i.count + 1, }
                    }
                    return i;
                }),
            }
        case DECREASE_ITEMS_COUNT:
            return {
                ...state,
                itemsCount: state.itemsCount - 1,
                itemsInCart: state.itemsInCart.map((i) => {
                    if (i.id === action.id) {
                        return { ...i, count: i.count - 1, }
                    }
                    return i;
                }),
            }
        default:
            return state;
    }
};
export const addProductAction = (item) => ({ type: ADD_PRODUCT, item })
export const deleteProductAction = (id) => ({ type: DELETE_PRODUCT, id })
export const increaseItemsCountAction = (id) => ({ type: INCREASE_ITEMS_COUNT, id })
export const decreaseItemsCountAction = (id) => ({ type: DECREASE_ITEMS_COUNT, id })