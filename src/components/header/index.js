import React from "react";
import "./header.css";
import { BtnBurger } from "./btnBurger";
import { HeaderNav } from "./headerNav";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className="app-header">
      <div className="container">
        <BtnBurger />
        <Logo />
        <HeaderNav />
      </div>
    </header>
  );
};
