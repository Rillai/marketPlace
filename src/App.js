import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import { HeaderContainer } from './components/header/headerContainer';
import { Content } from './components/content/content';
import { Cart } from './components/cart/cart';

function App(props) {
  return (
    <div className="app" id='top'>
      <div>
        <HeaderContainer />
      </div>
      <div className='app-content'>
        <Route exact path='/' render={() => <Content />} />
        <Route exact path='/cart' render={() => <Cart />} />
      </div>
    </div>
  );
}

export default App;
