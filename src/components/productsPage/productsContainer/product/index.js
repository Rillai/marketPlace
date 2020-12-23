import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Product = (props) => {
  const activeButton = useSelector((state) => state.productsPage.activeButton);
  const product = props.product;
  const stars = Math.round(product.rating);

  return (
    <div className="product">
      <NavLink to="/productInfo">
        <img alt="product" src={`assets/img/content/${product.img}.jpg`} />
      </NavLink>
      <strong className="price">{product.price} ₽</strong>
      <p>{product.name}</p>
      <p className="stars">{Array.from({ length: stars }, (i) => <span key={i}>★</span>)}</p>
      {!activeButton.find((i) => product.id === i) ? (
        <button className="addToCart" onClick={() => props.addToCart(product)}>
          В корзину
        </button>
      ) : (
          <NavLink to="/cart">
            <button className="addToCart active">В корзинe</button>
          </NavLink>
        )}
    </div>
  );
};
