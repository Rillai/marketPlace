import React from 'react'

export const Input = (props) => {
    return <input required={props.required} type={props.type} pattern={props.pattern} id={props.id} minLength={props.min} maxLength={props.max} placeholder={props.placeholder} value={props.value} onChange={(e) => props.func(e.target.value)} />
}