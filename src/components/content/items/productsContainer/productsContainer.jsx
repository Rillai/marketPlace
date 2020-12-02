import React from 'react'
import { useDispatch } from 'react-redux';
import { addProductAction } from '../../../../redux/cart-reducer';
import { setActiveButtonAction } from '../../../../redux/content-reducer';
import { Product } from './product';

export const ProductContainer = (props) => {
    const dispatch = useDispatch()
    const addProduct = (item) => dispatch(addProductAction(item))
    const setActiveButton = (id) => dispatch(setActiveButtonAction(id))

    const starsCount = (rating) => {
        let stars = Math.round(rating)
        let star = [];
        for (let i = 0; i < stars; i++) {
            star.push(<span key={i}>★</span>)
        }
        return star
    }
    const toCart = (p) => {
        let item = { id: p.id, name: p.name, price: p.price, article: p.article, count: 1 }
        setActiveButton(p.id)
        addProduct(item)
    }
    return <main className='productsContainer'>
        {props.products.map(product =>
            <Product key={product.id} p={product} toCart={toCart} starsCount={starsCount} />)}
    </main>
}