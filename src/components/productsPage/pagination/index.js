import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPageAction } from './../../../redux/actions/productsPage-actions';

export const Pagination = () => {
  const dispatch = useDispatch();
  const pagesCount = useSelector((state) => Math.ceil(state.productsPage.products.length / state.productsPage.pageSize));
  const currentPage = useSelector((state) => state.productsPage.currentPage);
  const setCurrentPage = (page) => {
    if (currentPage !== page) {
      dispatch(setCurrentPageAction(page));
    }
  };
  return (
    <nav className="pagination">
      {Array.from({ length: pagesCount }, (none, index) =>
        <span
          key={index + 1}
          className={currentPage === index + 1 ? "active" : null}
          onClick={() => setCurrentPage(index + 1)}>
          {index + 1}
        </span>
      )}
    </nav>
  );
};
