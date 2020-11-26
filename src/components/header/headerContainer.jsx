import React from 'react'
import { connect } from 'react-redux';
import { Header } from './header';
import { countItemsInCart } from './../../selectors/header-selectors';

//state.cart.countItemsInCart
let mapStateToProps = (state) => {
    return {
        countItemsInCart: countItemsInCart(state)
    }
}
export const HeaderContainer = connect(mapStateToProps, null)(Header)