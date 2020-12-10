import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Input } from './../../../customItems/input/input';
import { setCardInfo } from './../../../../redux/order-reducer';

export const OrderStepTwo = (props) => {
    const dispatch = useDispatch()
    const cardInfo = useSelector(state => state.order.cardInfo)
    const [cardNumber, setCardNumber] = useState(cardInfo.cardNumber)
    const [cardHolder, setCardHolder] = useState(cardInfo.cardHolder)
    const [month, setMonth] = useState(cardInfo.month)
    const [year, setYear] = useState(cardInfo.year)
    const [cw, setCw] = useState(cardInfo.cw)

    const regxp = (value) => { return /^\d*$/.test(value) }
    const setError = (error) => props.setError(error)
    
    const validation = (e) => {
        e.preventDefault()
        if (regxp(cardNumber, month, year, cw)) {
            if(window.confirm('Сохранить данные карты?')){
            dispatch(setCardInfo({ cardNumber: cardNumber, cardHolder: cardHolder, month: month, year: year, cw: cw }))
            }
            props.navigate('stepThree')
        } else {
            setError('Что-то заполнено неверно, проверьте пожалуйста данные.')
        }
    }

    return (
        <>
            <h2 className='order_title'>Информация о карте</h2>
            <form className='order_form_two' onSubmit={(e) => validation(e)}>
                <Input id='cardNumber' min='13' max='19' required='true' placeholder='Номер карты' value={cardNumber} func={setCardNumber} />
                <Input id='cardHolder' min='3' required='true' placeholder='Владелец карты' value={cardHolder} func={setCardHolder} />
                <p className='order_text'>Дата окончания действия карты:</p>
                <Input id='month' min='2' max='2' required='true' placeholder='Месяц' value={month} func={setMonth} />
                <Input id='year' min='4' max='4' required='true' placeholder='Год' value={year} func={setYear} />
                <Input id='cw' min='3' max='3' required='true' placeholder='Секретный код' value={cw} func={setCw} />
                <button type='submit'>Далее</button>
            </form>
        </>
    )
}