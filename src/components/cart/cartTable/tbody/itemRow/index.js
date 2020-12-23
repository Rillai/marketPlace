import React from "react";
import { DeleteBtn } from "./buttons/deleteBtn";
import { AddBtn } from "./buttons/addBtn";

export const ItemRow = (props) => {
  const item = props.item;

  return (
    <tr key={item.id}>
      <td>{props.number}</td>
      <td>{item.price} ₽</td>
      <td>{item.name}</td>
      <td>{item.article}</td>
      <DeleteBtn id={item.id} count={item.count} />
      <td>{item.count}</td>
      <AddBtn id={item.id} />
    </tr>
  );
};
