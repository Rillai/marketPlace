import React from 'react'
import './header.css';
import { BtnBurger } from './items/btnBurger';
import { Logo } from './items/logo';
import { HeaderNav } from './items/headerNav';

export const Header = (props) => {
    return (
        <header className="app-header">
            <div className='container'>
                <BtnBurger />
                <Logo />
                <HeaderNav />
            </div>
        </header>
    )
}