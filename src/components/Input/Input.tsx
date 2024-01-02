import "./input.scss";

interface ItfInputAttrs {
    name: string;
    type: string;
    placeholder: string;
    value: string | number;
    onChange: any
}

const Input = ({ name, type, placeholder, value, onChange }: ItfInputAttrs) => {
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

export default Input
