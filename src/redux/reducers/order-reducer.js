import { SET_CARD_INFO, SET_USER_INFO, SET_USER_ADRESS } from './../types/order-types';

const initialState = {
    userInfo: { name: '', lastName: '', number: '', email: '' },
    cardInfo: { cardNumber: '', cardHolder: '', month: '', year: '', cw: '' },
    userAdress: { adress: '' }
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