import React, { useState } from "react";
import "./order.css";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { itemsCountSelector } from "./../../selectors/cart-selectors";
import { OrderSteps } from "./orderSteps";

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
