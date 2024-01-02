import React from "react";
import { Link } from "react-router-dom";

import arrowImg from "../../assets/arrow.png";
import "./another-login-type.scss";

export default function AnotherLoginType({ title, description, path }) {
    return (
        <div className="toLogin">
            <p className="toLogin__text">{title}</p>
            <Link className="toLogin__button" to={path}>
                {description} <img className="toLogin__img" src={arrowImg} />
            </Link>
        </div>
    );
}
