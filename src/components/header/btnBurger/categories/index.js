import React from "react";
import { NavLink } from "react-router-dom";

export const Categories = () => {
  return (
        <nav>
          <NavLink to="/category/male">Мужские товары</NavLink>
          <NavLink to="/category/female">Женские товары</NavLink>
          <NavLink to="/category/children">Детские товары</NavLink>
        </nav>
  );
};
