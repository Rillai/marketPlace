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
    
    const validation = () => {
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
            <form className='order_form_two' onSubmit={() => validation()}>
                <Input id='cardNumber' minLength='13' maxLength='19' required placeholder='Номер карты' value={cardNumber} func={setCardNumber} />
                <Input id='cardHolder' minLength='3' required placeholder='Владелец карты' value={cardHolder} func={setCardHolder} />
                <p className='order_text'>Дата окончания действия карты:</p>
                <Input id='month' minLength='2' maxLength='2' required placeholder='Месяц' value={month} func={setMonth} />
                <Input id='year' minLength='4' maxLength='4' required placeholder='Год' value={year} func={setYear} />
                <Input id='cw' minLength='3' maxLength='3' required placeholder='Секретный код' value={cw} func={setCw} />
                <button type='submit'>Далее</button>
            </form>
        </>
    )
}