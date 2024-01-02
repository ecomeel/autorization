import React from "react";

import "./button.scss";

export default function Button({ text, handleBtnClick }) {
    return (
        <button onClick={handleBtnClick} className="button">
            {text}
        </button>
    );
}
