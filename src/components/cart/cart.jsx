import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductAction, increaseItemsCountAction, decreaseItemsCountAction } from '../../redux/cart-reducer';
import './cart.css';

export function Cart(props) {
    const dispatch = useDispatch()
    const itemsInCart = useSelector(state => state.cart.itemsInCart)
    const deleteProduct = (id, count) => {
        if (count == 1) {
            dispatch(deleteProductAction(id))
        } else {
            dispatch(decreaseItemsCountAction(id))
        }
    }
    const increaseItemsCount = (id) => dispatch(increaseItemsCountAction(id))

    let a = 0
    return (
        <div className='container'>
            <table className='cartContainer'>
                {itemsInCart.map(i =>
                    <tbody>
                        <tr key={i.id}>
                            <td>{a = a + 1}</td>
                            <td>{i.price} ₽</td>
                            <td>{i.name}</td>
                            <td>Артикул:{i.article}</td>
                            <td><button onClick={() => deleteProduct(i.id, i.count)}>-</button></td><td>{i.count}</td><td><button onClick={() => increaseItemsCount(i.id)}>+</button></td>
                        </tr>
                    </tbody>)}
            </table>
        </div>
    )
}