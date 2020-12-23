import React, { useState } from "react";
import "./productsPage.css";
import { useSelector } from "react-redux";
import { SortPanel } from "./sortPanel";
import { Pagination } from "./pagination";
import { ProductsContainer } from "./productsContainer";
import { productsSelector } from './../../redux/selectors/productsPage-selectors';

export const ProductsPage = () => {
  const [sortMode, setSortMode] = useState();
  const [reverse, setReverse] = useState();
  const products = useSelector((state) => productsSelector(state, sortMode, reverse));
  const setMode = (factor) => {
    if (sortMode == factor) {
      setReverse(!reverse);
    } else {
      setReverse(false);
      setSortMode(factor);
    }
  };

  return (
    <div className="content">
      <SortPanel setMode={setMode} />
      <Pagination />
      <ProductsContainer products={products} />
    </div>
  );
};
