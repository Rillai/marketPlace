import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";
import { Item } from "./items/item/index";
import { Thead } from "./items/thead/index";
import { OrderBox } from "./items/orderBox/index";

export const Cart = () => {
  const itemsInCart = useSelector((state) => state.cart.itemsInCart);

  return (
    <div className="cart">
      {itemsInCart == 0 ? (
        <h2 className="noItems">
          У вас пока нет товаров в корзине, но вы можете их добавить!
        </h2>
      ) : (
        <>
          <table className="cartContainer">
            <Thead />
            <tbody>
              {itemsInCart.map((item, index) => (
                <Item item={item} number={index + 1} />
              ))}
            </tbody>
          </table>
          <OrderBox />
        </>
      )}
    </div>
  );
};
