import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProductAction } from '../../../../redux/cart-reducer';
import { setActiveButtonAction } from '../../../../redux/content-reducer';
import { Product } from './product';

export const ProductsContainer = (props) => {
    const dispatch = useDispatch()
    const addProduct = (item) => dispatch(addProductAction(item))
    const setActiveButton = (id) => dispatch(setActiveButtonAction(id))

    const toCart = (p) => {
        let item = { id: p.id, name: p.name, price: p.price, article: p.article, count: 1 }
        setActiveButton(p.id)
        addProduct(item)
    }
    const starsCount = (rating) => {
        let stars = Math.round(rating)
        let star = [];
        for (let i = 0; i < stars; i++) {
            star.push(<span key={i}>★</span>)
        }
        return star
    }
    
    return <main className='productsContainer'>
        {props.products.map(product =>
            <Product key={product.id} p={product} toCart={toCart} starsCount={starsCount} />)}
    </main>
}