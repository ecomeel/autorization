import "./header.scss";
import { IHeader } from "../../types/data";

const Header = ({ title, description }: IHeader) => {
    return (
        <header className="header">
            <h1 className="header__title">{title}</h1>
            <p className="header__description">{description}</p>
        </header>
    );
};

export default Header;
