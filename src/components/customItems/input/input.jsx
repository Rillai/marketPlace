import React from 'react'

export const Input = (props) => {
    return <input {...props} value={props.value} maxLength={props.max} minLength={props.min} onChange={(e) => props.func(e.target.value)} />
}