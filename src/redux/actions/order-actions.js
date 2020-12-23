import { SET_CARD_INFO, SET_USER_INFO, SET_USER_ADRESS } from '../types/order-types';

export const setUserInfo = (userInfo) => ({ type: SET_USER_INFO, userInfo })
export const setCardInfo = (cardInfo) => ({ type: SET_CARD_INFO, cardInfo })
export const setUserAdress = (userAdress) => ({ type: SET_USER_ADRESS, userAdress })