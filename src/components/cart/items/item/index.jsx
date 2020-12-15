import React from "react";
import { useDispatch } from "react-redux";
import { unsetActiveButtonAction } from "../../../../redux/content-reducer";
import {
  deleteProductAction,
  decreaseItemsCountAction,
  increaseItemsCountAction,
} from "../../../../redux/cart-reducer";

export const Item = (props) => {
  const dispatch = useDispatch();
  const deleteProduct = (id, count) => {
    if (count === 1) {
      dispatch(unsetActiveButtonAction(id));
      dispatch(deleteProductAction(id));
    } else {
      dispatch(decreaseItemsCountAction(id));
    }
  };
  const increaseItemsCount = (id) => dispatch(increaseItemsCountAction(id));
  const item = props.item;

  return (
    <tr key={item.id}>
      <td>{props.number}</td>
      <td>{item.price} ₽</td>
      <td>{item.name}</td>
      <td>{item.article}</td>
      <td>
        <button onClick={() => deleteProduct(item.id, item.count)}>-</button>
      </td>
      <td>{item.count}</td>
      <td>
        <button onClick={() => increaseItemsCount(item.id)}>+</button>
      </td>
    </tr>
  );
};
