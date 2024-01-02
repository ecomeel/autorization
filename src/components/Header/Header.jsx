import React from "react";
import './header.scss';

export default function Header({title, description}) {
    return (
        <header className="header">
            <h1 className="header__title">{title}</h1>
            <p className="header__description">{description}</p>
        </header>
    )
}