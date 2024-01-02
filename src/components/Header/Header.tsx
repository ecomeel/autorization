import './header.scss';

interface IntHeaderText {
    headerTitle: string,
    description: string
}

const Header = ({headerTitle, description}: IntHeaderText) => { // ??
    return (
        <header className="header">
            <h1 className="header__title">{headerTitle}</h1>
            <p className="header__description">{description}</p>
        </header>
    )
}

export default Header