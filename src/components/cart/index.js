import React from "react";
import "./cart.css";
import { useSelector } from 'react-redux';
import { CartTable } from "./cartTable";
import { OrderBox } from "./orderBox";

export const Cart = () => {
  const itemsInCart = useSelector((state) => state.cart.itemsInCart);

  return (
    <div className="cart">
      {itemsInCart == 0 ? (
        <h2 className="noItemsInCart">
          У вас пока нет товаров в корзине, но вы можете их добавить!
        </h2>
      ) : (
          <>
            <CartTable itemsInCart={itemsInCart} />
            <OrderBox />
          </>
        )}
    </div>
  );
};