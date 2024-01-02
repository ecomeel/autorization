import './header.scss';

interface IntHeaderText {
    title: string,
    description: string
}

const Header = ({title, description}: IntHeaderText) => { // ??
    return (
        <header className="header">
            <h1 className="header__title">{title}</h1>
            <p className="header__description">{description}</p>
        </header>
    )
}

export default Header