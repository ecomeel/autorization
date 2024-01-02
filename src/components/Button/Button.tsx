import "./button.scss";

interface ItfButton {
    text: string;
    handlebtnClick: () => void;
}

const Button = ({ text, handlebtnClick }: ItfButton) => {
    return (
        <button onClick={handlebtnClick} className="button">
            {text}
        </button>
    );
}

export default Button