import React from "react";
import { Thead } from "./thead";
import { Tbody } from './tbody';

export const CartTable = (props) => {

  return (
    <table className="cartContainer">
      <Thead />
      <Tbody itemsInCart={props.itemsInCart} />
    </table>
  )
}
