import React from "react";
import { useDispatch } from "react-redux";
import { deleteProductAction, decreaseItemsCountAction } from './../../../../../../redux/actions/cart-actions';
import { unsetActiveButtonAction } from './../../../../../../redux/actions/productsPage-actions';

export const DeleteBtn = (item) => {
  const dispatch = useDispatch();
  const deleteProduct = (id, count) => {
    if (count === 1) {
      dispatch(unsetActiveButtonAction(id));
      dispatch(deleteProductAction(id));
    } else {
      dispatch(decreaseItemsCountAction(id));
    }
  };
  return (
    <td>
      <button onClick={() => deleteProduct(item.id, item.count)}>-</button>
    </td>
  );
};
