import React, { useState } from 'react'
import { Redirect, useHistory, Route } from 'react-router-dom';
import './order.css';
import { itemsCountSelector } from './../../selectors/cart-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo, setCardInfo, setUserAdress } from '../../redux/order-reducer';
import { OrderOne } from './items/order_one';
import { OrderTwo } from './items/order_two';
import { OrderThree } from './items/order_three';

export function Order(props) {
    const itemsInCartCount = useSelector(itemsCountSelector)
    const history = useHistory();
    const dispatch = useDispatch()
    const [error, setError] = useState()

    function navigate(path, info) {
        if (path === 1) {
            dispatch(setUserInfo(info))
        } else if (path === 2) {
            dispatch(setCardInfo(info))
        } else {
            dispatch(setUserAdress)
        }
        history.push(`${path}`);
    }

    // if (itemsInCartCount <= 0) {
    //     return <Redirect to='/' />;
    // } else {
    return (
        <div className='order'>
            <h1 className='order_main_title'>Оформление заказа</h1>
            {error ? <div className='errorMessage'>{error}</div> : null}
            <Route exact path='/cart/order' render={() => <OrderOne setError={setError} navigate={navigate} />} />
            <Route exact path='/cart/order/1' render={() => <OrderTwo setError={setError} navigate={navigate} />} />
            <Route exact path='/cart/order/2' render={() => <OrderThree navigate={navigate} />} />
        </div >
    )
}