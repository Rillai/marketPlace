import React from "react";
import { NavLink } from "react-router-dom";

export const Logo = () => {
  return (
    <NavLink to="/" className="logo">
      <span>›</span>marketplace
    </NavLink>
  );
};
