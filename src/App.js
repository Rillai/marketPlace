import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components/header';
import { Content } from './components/content';
import { Cart } from './components/cart';
import { Order } from './components/order/';
import { BreadCrumbs } from './breadCrumbs';

function App(props) {
  return (
    <div className="app" id='top'>
      <div>
        <Header />
      </div>
      <div className='app-content'>
        <div className='container relative'>
          <BreadCrumbs />
          <Route exact path='/' render={() => <Content />} />
          <Route exact path='/cart' render={() => <Cart />} />
          <Route path='/cart/order' render={() => <Order />} />
        </div>
      </div>
    </div>
  );
}

export default App;
