const SET_USER_INFO = "SET_USER_INFO";
const SET_CARD_INFO = "SET_CARD_INFO";
const SET_USER_ADRESS = "SET_USER_ADRESS";

let initialState = {
    userInfo: {},
    cardInfo: {},
    userAdress: {}
};
export const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return { ...state, userInfo: action.userInfo }
        case SET_CARD_INFO:
            return { ...state, cardInfo: action.cardInfo }
        case SET_USER_ADRESS:
            return { ...state, userAdress: action.userAdress }
        default:
            return state;
    }
};

export const setUserInfo = (userInfo) => ({ type: SET_USER_INFO, userInfo })
export const setCardInfo = (cardInfo) => ({ type: SET_CARD_INFO, cardInfo })
export const setUserAdress = (userAdress) => ({ type: SET_USER_ADRESS, userAdress })