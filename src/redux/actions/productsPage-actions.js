import { SET_ACTIVE_BUTTON, SET_PAGE, UNSET_ACTIVE_BUTTON } from './../types/productsPage-types';

export const setCurrentPageAction = (currentPage) => ({ type: SET_PAGE, currentPage })
export const setActiveButtonAction = (id) => ({ type: SET_ACTIVE_BUTTON, id })
export const unsetActiveButtonAction = (id) => ({ type: UNSET_ACTIVE_BUTTON, id })