import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components/header';
import { ProductsPage } from './components/productsPage';
import { Cart } from './components/cart';
import { Order } from './components/order/';
import { BreadCrumbs } from './breadCrumbs';
import { Footer } from './components/footer/index';

const App = () => {
  return (
    <div className="app" id='top'>
      <Header />
      <div className='app-content'>
        <div className='container relative'>
          <BreadCrumbs />
          <Route exact path='/' render={() => <ProductsPage />} />
          <Route exact path='/cart' render={() => <Cart />} />
          <Route exaxt path='/cart/order' render={() => <Order />} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;