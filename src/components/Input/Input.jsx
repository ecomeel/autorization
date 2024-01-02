import React from "react";
import "./input.scss";
export default function Input({ name, type, placeholder, value, onChange }) {
    return (
        <>
            <input
                id={name}
                className="input"
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </>
    );
}
