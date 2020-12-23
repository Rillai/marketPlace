import React from "react";
import { useDispatch } from "react-redux";
import { addProductAction } from '../../../redux/actions/cart-actions';
import { setActiveButtonAction } from "../../../redux/actions/productsPage-actions";
import { Product } from "./product";

export const ProductsContainer = (props) => {
  const dispatch = useDispatch();
  const addProduct = (item) => dispatch(addProductAction(item));
  const setActiveButton = (id) => dispatch(setActiveButtonAction(id));
  const addToCart = (product) => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      article: product.article,
      count: 1,
    };
    setActiveButton(product.id);
    addProduct(item);
  };

  return (
    <main className="productsContainer">
      {props.products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </main>
  );
};
