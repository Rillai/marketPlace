import React, { useState } from "react";
import "./order.css";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { OrderSteps } from "./orderSteps";
import { itemsCountSelector } from './../../redux/selectors/cart-selectors';

export const Order = () => {
  const itemsInCartCount = useSelector(itemsCountSelector);
  const [error, setError] = useState();

  if (itemsInCartCount <= 0) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="order">
        <h1 className="order_main_title">Оформление заказа</h1>
        {error ? <div className="errorMessage">{error}</div> : null}
        <OrderSteps setError={setError} />
      </div>
    );
  }
};
