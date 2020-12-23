import { DECREASE_ITEMS_COUNT, DELETE_PRODUCT, ADD_PRODUCT, INCREASE_ITEMS_COUNT } from "../types/cart-types";

export const addProductAction = (item) => ({ type: ADD_PRODUCT, item })
export const deleteProductAction = (id) => ({ type: DELETE_PRODUCT, id })
export const increaseItemsCountAction = (id) => ({ type: INCREASE_ITEMS_COUNT, id })
export const decreaseItemsCountAction = (id) => ({ type: DECREASE_ITEMS_COUNT, id })