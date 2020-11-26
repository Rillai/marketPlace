import React, { useState } from 'react'
import './content.css';
import { Product } from './items/product';
import { productsSelector, pagesCountSelector } from './../../selectors/content-selector';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPageAction } from './../../redux/content-reducer';

export function Content(props) {
    const [sortMode, setSortMode] = useState()
    const dispatch = useDispatch()
    const products = useSelector(state => productsSelector(state, sortMode))
    const pagesCount = useSelector(pagesCountSelector)
    const currentPage = useSelector(state => state.content.currentPage)
    const setCurrentPage = (currentPage) => dispatch(setCurrentPageAction(currentPage))

    return (
        <div className='container content'>
            <div className='sortPanel'>
                <button onClick={() => setSortMode(1)}>По цене</button>
                <button onClick={() => setSortMode(2)}>По рейтингу</button>
                <button onClick={() => setSortMode(3)}>По названию</button></div>
            <nav className='pagination'>
                {pagesCount.map(p => {
                    return <span key={p} className={currentPage === p ? 'active' : null} onClick={() => setCurrentPage(p)}>{p}</span>
                })}
            </nav>
            <main className='productsContainer'>
                {products.map(product =>
                    <Product p={product} />)}
            </main>
        </div>
    )
}