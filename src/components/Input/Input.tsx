import "./input.scss";
import React from 'react'

interface ItfInputAttrs {
    name: string;
    type: string;
    placeholder: string;
    value: string | number;
    onInputChange: any
}

const Input = ({ name, type, placeholder, value, onInputChange }: ItfInputAttrs) => {
    return (
        <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onInputChange}
        />
    );
};

export default Input;
