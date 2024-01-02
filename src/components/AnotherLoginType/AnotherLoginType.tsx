import { Link } from "react-router-dom";

import arrowImg from "../../assets/arrow.png";
import "./another-login-type.scss";

interface ItfAnotherLoginType {
    title: string;
    description: string;
    path: string;
}

const AnotherLoginType = ({
    title,
    description,
    path,
}: ItfAnotherLoginType) => {
    return (
        <div className="toLogin">
            <p className="toLogin__text">{title}</p>
            <Link className="toLogin__button" to={path}>
                {description} <img className="toLogin__img" src={arrowImg} />
            </Link>
        </div>
    );
};

export default AnotherLoginType;
