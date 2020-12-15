import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Product = (props) => {
    const activeButton = useSelector(state => state.content.activeButton)
    const product = props.product
    return (
        <div className='product'>
            <NavLink to='/productInfo'>
                <img alt='product' src={`assets/img/content/${product.img}.jpg`} />
            </NavLink>
            <strong className='price'>
                {product.price} ₽
                </strong>
            <p>
                {product.name}
            </p>
            <p className='stars'>
                {props.starsCount(product.rating)}
            </p>
            {!activeButton.find((i) => product.id === i)
                ? <button className='addToCart' onClick={() => props.toCart(product)}>В корзину</button>
                : <NavLink to='/cart'><button className='addToCart active'>В корзинe</button></NavLink>}
        </div>)
}