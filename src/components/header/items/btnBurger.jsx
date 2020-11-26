import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './btnBurger.css';
export function BtnBurger() {
    const [isShow, setisShow] = useState(false);
    const toggleFIeldset = () => setisShow(!isShow);
    return (
        <>
            <button className='btn-burger' onClick={toggleFIeldset}><span></span></button>

            <div className={isShow ? 'burger-list burger-list-active' : 'burger-list'}>
                <nav>
                    <NavLink to='/category/male'>Мужские товары</NavLink>
                    <NavLink to='/category/female'>Женские товары</NavLink>
                    <NavLink to='/category/children'>Детские товары</NavLink>
                </nav>
                <div className='go-back' onClick={toggleFIeldset}/>
            </div>
        </>)
}