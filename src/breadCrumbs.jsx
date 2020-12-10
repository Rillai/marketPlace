import './App.css';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const BreadCrumbs = (props) => {
  const translate = (pathName) => {
    switch (pathName) {
      case 'cart':
        return 'корзина'
      case 'order':
        return 'оформление заказа'
      case 'category':
        return 'категории'
      case 'male':
        return 'мужская'
      case 'female':
        return 'женская'
      case 'children':
        return 'детская'
    }
  }
  const location = useLocation();
  const path = location.pathname.split('/');
  let root = '/'

  return (
    <nav className='breadCrumbs'>
      <NavLink to='/'>главная</NavLink>
      {path.map(p => {
        if (p == '' || /^\d/.test(p)) {
          return null
        } else {
          root = root + p + '/'
          return <NavLink key={p} to={root}>&nbsp;/ {translate(p)}</NavLink>
        }
      })}
    </nav>)
}
