import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  itemsCountSelector,
  itemsInCartPriceSelector,
} from "../../../../selectors/cart-selectors";

export const OrderBox = () => {
  const itemsInCartPrice = useSelector(itemsInCartPriceSelector);
  const itemsInCartCount = useSelector(itemsCountSelector);

  return (
    <div className="orderBox">
      <p>
        Товаров в корзине: <strong>{itemsInCartCount}</strong>
      </p>
      <p>
        Общая стоимость: <strong>{itemsInCartPrice}</strong>
      </p>
      <NavLink exact to="/cart/order/">
        <button>Оформить заказ</button>
      </NavLink>
    </div>
  );
};
