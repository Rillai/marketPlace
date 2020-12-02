import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPageAction } from '../../../redux/content-reducer';
import { pagesCountSelector, } from '../../../selectors/content-selector';

export const Pagination = (props) => {
    const dispatch = useDispatch()
    const pagesCount = useSelector(pagesCountSelector)
    const currentPage = useSelector(state => state.content.currentPage)
    const setCurrentPage = (page) => {
        if (currentPage !== page) {
            dispatch(setCurrentPageAction(page))
        }
    }
    return (
        <nav className='pagination'>
            {pagesCount.map(p => {
                return <span key={p} className={currentPage === p ? 'active' : null} onClick={() => setCurrentPage(p)}>{p}</span>
            })}
        </nav>)
}