import React from "react";
import { ItemRow } from './itemRow';

export const Tbody = (props) => {

  return (
    <tbody>
    {props.itemsInCart.map((item, index) => (
      <ItemRow item={item} number={index + 1} />
    ))}
  </tbody>
  );
};
