import "./checkbox.scss";

interface ItfCheckbox {
    name: string,
    label: string,
    isConfirm: boolean,
    onChange: any
}

const Checkbox = ({ name, label, isConfirm, onChange }: ItfCheckbox) => {
    return (
        <div className="checkbox">
            <input
                id="checkbox"
                className="checkbox__input"
                type="checkbox"
                name={name}
                checked={isConfirm}
                onChange={onChange}
            />
            <label className="checkbox__label" htmlFor="checkbox">
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
