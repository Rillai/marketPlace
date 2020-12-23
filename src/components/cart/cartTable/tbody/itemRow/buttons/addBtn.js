import React from "react";
import { useDispatch } from "react-redux";
import { increaseItemsCountAction } from './../../../../../../redux/actions/cart-actions';

export const AddBtn = (props) => {
  const dispatch = useDispatch();
  return (
    <td>
      <button onClick={() => dispatch(increaseItemsCountAction(props.id))}>+</button>
    </td>
  );
};
