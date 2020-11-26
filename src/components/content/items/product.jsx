import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addProductAction } from '../../../redux/cart-reducer';
import { setActiveButtonAction } from '../../../redux/content-reducer';

export const Product = (props) => {
    const dispatch = useDispatch()
    const activeButton = useSelector(state => state.content.activeButton)
    const addProduct = (item) =>dispatch(addProductAction(item))
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
    return <div key={props.p.id} className='product'>
        <NavLink to='/productInfo'>
            <img alt='product' src={`assets/img/content/${props.p.img}.jpg`} />
        </NavLink>
        <strong className='price'>
            {props.p.price} ₽
            </strong>
        <p>{props.p.name}</p>
        <p className='stars'>
            {starsCount(props.p.rating)}
        </p>
        {!activeButton.find((i) => props.p.id == i)
            ? <button className='addToCart' onClick={() => toCart(props.p)}>В корзину</button>
            : <NavLink to='/cart'><button className='addToCart active'>В корзинe</button></NavLink>}
    </div>
}