import "./button.scss";

interface ItfButton {
    name: string,
    text: string;
    handlebtnClick: () => void;
}

const Button = ({ name, text, handleBtnClick }: ItfButton) => {
    return (
        <button name={name} onClick={handleBtnClick} className="button">
            {text}
        </button>
    );
}

export default Button