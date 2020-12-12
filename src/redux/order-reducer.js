const SET_USER_INFO = "SET_USER_INFO";
const SET_CARD_INFO = "SET_CARD_INFO";
const SET_USER_ADRESS = "SET_USER_ADRESS";

let initialState = {
    userInfo: { name: '', lastName: '', number: '', email: '' },
    cardInfo: { cardNumber: '', cardHolder: '', month: '', year: '', cw: '' },
    userAdress: { adress: ''}
};

const handlersInfo = {
    [SET_USER_INFO]: (state, action) => ({ ...state, userInfo: action.userInfo, }),
    [SET_CARD_INFO]: (state, action) => ({ ...state, cardInfo: action.cardInfo }),
    [SET_USER_ADRESS]: (state, action) => ({ ...state, userAdress: action.userAdress }),
};

export const OrderReducer = (state = initialState, action) => {
    if (handlersInfo[action.type]) {
        return handlersInfo[action.type](state, action);
    }
    return state
};

export const setUserInfo = (userInfo) => ({ type: SET_USER_INFO, userInfo })
export const setCardInfo = (cardInfo) => ({ type: SET_CARD_INFO, cardInfo })
export const setUserAdress = (userAdress) => ({ type: SET_USER_ADRESS, userAdress })