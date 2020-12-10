import React from 'react'
import { OrderStepOne } from './steps/orderStepOne';
import { OrderStepTwo } from './steps/orderStepTwo';
import { OrderStepThree } from './steps/orderStepThree';
import { Route, useHistory } from 'react-router-dom';

export const OrderSteps = (props) => {
    const history = useHistory()

    const navigate = (path) => {
        history.push(`${path}`);
        props.setError('')
    }
    return (
        <>
            <Route exact path='/cart/order/' render={() => <OrderStepOne setError={props.setError} navigate={navigate} />} />
            <Route exact path='/cart/order/stepTwo' render={() => <OrderStepTwo setError={props.setError} navigate={navigate} />} />
            <Route exact path='/cart/order/stepThree' render={() => <OrderStepThree navigate={navigate} />} />
        </>
    )
}