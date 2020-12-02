import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Input } from './input';

export function OrderOne(props) {
    const userInfo = useSelector(state => state.order.userInfo)

    const [name, setName] = useState(userInfo.name)
    const [lastName, setLastName] = useState(userInfo.lastName)
    const [number, setNumber] = useState(userInfo.number)
    const [email, setEmail] = useState(userInfo.email)
    const validation = (e) => {
        e.preventDefault()
        if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email)) {
            let userInfo = { name: name, lastName: lastName, number: number, email: email }
            props.navigate(1, userInfo)
            props.setError('')
        } else {
            props.setError('Почта введена неверно!')
        }
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
            <form className='order_form_one' onSubmit={(e) => validation(e)}>
                <Input id='name' min='3' required='true' placeholder='Имя' value={name} func={setName} />
                <Input id='lastName' min='3' required='true' placeholder='Фамилия' value={lastName} func={setLastName} />
                <Input id='email' min='3' required='true' placeholder='Почта' value={email} func={setEmail} />
                <Input id='number' min='12' max='12' required='true' placeholder='Номер телефона' value={number} func={setNumberFunc} />
                <label for='news'>
                    <input id='news' type='checkbox' /> Подписаться на новостную рассылку
                    </label>
                <button type='submit'>Далее</button>
            </form>
        </>
    )
}