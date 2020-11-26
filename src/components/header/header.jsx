import React from 'react'
import { NavLink } from 'react-router-dom';
import { BtnBurger } from './items/btnBurger';
import './header.css';
export const Header = (props) => {
    return (
        <header className="app-header">
            <div className='container'>
                <BtnBurger />
                <NavLink to='/' className='logo'><span>›</span>marketplace</NavLink>
                <nav className='header-nav'>
                    <NavLink to='/cart'><div className='cart'><img src='assets/img/header/cart.png'/><div className='itemsInCart'>{props.countItemsInCart}</div></div></NavLink>
                </nav>
            </div>
        </header>
    )
}