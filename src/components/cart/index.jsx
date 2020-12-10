import React from 'react'
import './cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductAction, increaseItemsCountAction, decreaseItemsCountAction } from '../../redux/cart-reducer';
import { unsetActiveButtonAction } from '../../redux/content-reducer';
import { NavLink } from 'react-router-dom';
import { itemsInCartPriceSelector, itemsCountSelector } from '../../selectors/cart-selectors';

export const Cart = () => {
    const dispatch = useDispatch()
    const itemsInCart = useSelector(state => state.cart.itemsInCart)
    const itemsInCartPrice = useSelector(itemsInCartPriceSelector)
    const itemsInCartCount = useSelector(itemsCountSelector)
    const deleteProduct = (id, count) => {
        if (count === 1) {
            dispatch(unsetActiveButtonAction(id))
            dispatch(deleteProductAction(id))
        } else {
            debugger
            dispatch(decreaseItemsCountAction(id))
        }
    }
    const increaseItemsCount = (id) => dispatch(increaseItemsCountAction(id))
    let number = 0
    
    return (
        <div className='cart'>
            {itemsInCart == 0 ? <h2 className='noItems'>У вас пока нет товаров в корзине, но вы можете их добавить!</h2>
                : <> <table className='cartContainer'>
                    <thead>
                        <tr><th />
                            <th>Цена</th>
                            <th>Товар</th>
                            <th>Артикул</th>
                            <th /><th /><th />
                        </tr>
                    </thead>
                    <tbody>
                        {itemsInCart.map(i =>
                                
                            <tr key={i.id}>
                                <td>{++number}</td>
                                <td>{i.price} ₽</td>
                                <td>{i.name}</td>
                                <td>{i.article}</td>
                                <td><button onClick={() => deleteProduct(i.id, i.count)}>-</button></td><td>{i.count}</td><td><button onClick={() => increaseItemsCount(i.id)}>+</button></td>
                            </tr>

                        )}
                    </tbody>
                </table>
                    <div className='orderBox'>
                        <p>Товаров в корзине: <strong>{itemsInCartCount}</strong></p>
                        <p>Общая стоимость: <strong>{itemsInCartPrice}</strong></p>
                        <NavLink exact to='/cart/order/'><button>Оформить заказ</button></NavLink>
                    </div>
                </>}
        </div>
    )
}