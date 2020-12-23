import React, { useState } from "react";
import { Categories } from './categories';

export const BtnBurger = () => {
  const [isShow, setisShow] = useState(false);
  const toggleFIeldset = () => setisShow(!isShow);
  return (
    <>
      <button className="btn-burger" onClick={toggleFIeldset}>
        <span />
      </button>
      
      <div className={isShow ? "burger-list burger-list-active" : "burger-list"}>
        <Categories />
        <div className="go-back" onClick={toggleFIeldset} />
      </div>
    </>
  );
};
