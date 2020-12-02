import React, { useState } from 'react'
import './content.css';
import { productsSelector } from '../../selectors/content-selector';
import { useSelector } from 'react-redux';
import { SortPanel } from './items/sortPanel';
import { Pagination } from './items/pagination';
import { ProductContainer } from './items/productsContainer/productsContainer';

export function Content(props) {
    const [sortMode, setSortMode] = useState()
    const [reverse, setReverse] = useState()
    const products = useSelector(state => productsSelector(state, sortMode, reverse))
    const setMode = (factor) => {
        if (sortMode == factor) {
            setReverse(!reverse);
        } else {
            setReverse(false)
            setSortMode(factor)
        }
    }
    return (
        <div className='content'>
            <SortPanel setMode={setMode} />
            <Pagination />
            <ProductContainer products={products} />
        </div>
    )
}