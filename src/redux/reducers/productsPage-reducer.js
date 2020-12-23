import { SET_ACTIVE_BUTTON, SET_PAGE, UNSET_ACTIVE_BUTTON } from './../types/productsPage-types';

const initialState = {
    products: [
        { id: 1, name: 'Спортивный костюи', img: 'item1', price: 7990.99, rating: 3, article: 11546631 },
        { id: 2, name: 'Пальто', img: 'item2', price: 4499.99, rating: 5, article: 8944425 },
        { id: 3, name: 'Блузка', img: 'item12', price: 2999.99, rating: 5, article: 8944425 },
        { id: 4, name: 'Куртка', img: 'item3', price: 3999.99, rating: 4, article: 11546631 },
        { id: 5, name: 'Юбка', img: 'item10', price: 1999.99, rating: 4.3, article: 8944425 },
        { id: 6, name: 'Блузка-боди', img: 'item8', price: 3999.99, rating: 5, article: 8944425 },
        { id: 7, name: 'Штаны', img: 'item4', price: 2999.99, rating: 2, article: 8944425 },
        { id: 8, name: 'Блузка', img: 'item5', price: 3599.99, rating: 3, article: 11546631 },
        { id: 9, name: 'Свитер', img: 'item6', price: 1499.99, rating: 4.7, article: 8944425 },
        { id: 10, name: 'Свитер', img: 'item7', price: 2999.99, rating: 4, article: 11546631 },
        { id: 11, name: 'Рубашка', img: 'item9', price: 2999.99, rating: 3, article: 11546631 },
        { id: 12, name: 'Блузка-боди', img: 'item11', price: 2999.99, rating: 4, article: 11546631 },
        { id: 13, name: 'Блузка', img: 'item10', price: 2999.99, rating: 3, article: 11546631 },
    ],
    activeButton: [],
    currentPage: 1,
    pageSize: 9,
};

const handlersPage = {
    [SET_PAGE]: (state, action) =>
        ({ ...state, currentPage: action.currentPage }),
    [SET_ACTIVE_BUTTON]: (state, action) =>
        ({ ...state, activeButton: [...state.activeButton, action.id] }),
    [UNSET_ACTIVE_BUTTON]: (state, action) =>
        ({ ...state, activeButton: [...state.activeButton.filter((button) => button !== action.id),] }),
};


export const ProductsPageReducer = (state = initialState, action) => {
    if (handlersPage[action.type]) {
        return handlersPage[action.type](state, action);
    }
    return state
};