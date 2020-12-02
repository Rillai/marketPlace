import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Input } from './input';

export function OrderTwo(props) {
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
        if (regxp(cardNumber)) {
            if (regxp(month)) {
                if (regxp(year)) {
                    if (regxp(cw)) {
                        let cardInfo = { cardNumber: cardNumber, cardHolder: cardHolder, month: month, year: year, cw: cw }
                        props.navigate(2, cardInfo)
                    } else {
                        setError('Секретный код не подходит.')
                    }
                } else {
                    setError('Год неверен!')
                }
            } else {
                setError('Месяц неверен!')
            }
        } else {
            setError('Номер карты заполнен неверно.')
        }
    }

    return (
        <>
            <h2 className='order_title'>Информация о карте</h2>
            <form className='order_form_two' onSubmit={(e) => validation(e)}>
                <Input id='cardNumber' min='16' max='16' required='true' placeholder='Номер карты' value={cardNumber} func={setCardNumber} />
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