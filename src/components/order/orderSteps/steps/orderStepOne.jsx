import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from '../../../../redux/order-reducer';
import { Input } from './../../../customItems/input/input';

export const OrderStepOne = (props) => {
    const dispatch = useDispatch()
    const userInfo = useSelector(state => state.order.userInfo)
    const [name, setName] = useState(userInfo.name)
    const [lastName, setLastName] = useState(userInfo.lastName)
    const [number, setNumber] = useState(userInfo.number)
    const [email, setEmail] = useState(userInfo.email)

    const validation = (e) => {
        e.preventDefault()
        dispatch(setUserInfo({ name: name, lastName: lastName, number: number, email: email }))
        props.navigate('stepTwo')
    }
    const setNumberFunc = (e) => {
        let num = e
        if (e.includes('+')) {
            num = e.split('+')[1]
        }
        if (/^\d*$/.test(num)) {
            setNumber('+' + num)
        } else {
            props.setError('Только цифры!')
        }
    }
    return (
        <>
            <h2 className='order_title'>Информация о пользователе</h2>
            <form className='order_form_one' onSubmit={validation}>
                <Input id='name' minLength='3' required placeholder='Имя' value={name} func={setName} />
                <Input id='lastName' minLength='3' required placeholder='Фамилия' value={lastName} func={setLastName} />
                <Input id='email' type='email' minLength='3' required placeholder='Почта' value={email} func={setEmail} />
                <Input id='number' minLength='12' maxLength='12' required placeholder='Номер телефона' value={number} func={setNumberFunc} />
                <label htmlFor='news'>
                    <input id='news' type='checkbox' /> Подписаться на новостную рассылку
                    </label>
                <button type='submit'>Далее</button>
            </form>
        </>
    )
}