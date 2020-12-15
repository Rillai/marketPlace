import React from "react";
import "./App.css";
import { NavLink, useLocation } from "react-router-dom";

export const BreadCrumbs = (props) => {
  const handlersTranslate = {
    cart: "корзина",
    order: "оформление заказа",
    category: "категории",
    male: "мужская",
    female: "женская",
    children: "детская",
  };
  const translate = (pathName) => {
    return handlersTranslate[pathName];
  };
  const location = useLocation();
  const path = location.pathname.split("/");
  let root = "/";

  return (
    <nav className="breadCrumbs">
      <NavLink to="/">главная</NavLink>
      {path.map((path) => {
        if (path === "" || /^\d/.test(path)) {
          return null;
        } else {
          root = root + path + "/";
          return (
            <NavLink key={path} to={root}>
              &nbsp;/ {translate(path)}
            </NavLink>
          );
        }
      })}
    </nav>
  );
};
