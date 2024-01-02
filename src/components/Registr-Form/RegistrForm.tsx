import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { addUserToDatabase } from "../../firebase";
import { loginUser } from "../../store/slices/userSlice";

import "../Input/input.scss";
import "../Checkbox/checkbox.scss";
import "../Button/button.scss";
import "./registr-form.scss";

import { validation } from "../../hooks/useValidation.ts";
// import Checkbox from "../Checkbox/Checkbox.tsx";

export const RegistrForm: React.FC = () => {
    const [user, setUser] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        password: "",
        checkPassword: "",
        isPassConfirm: false,
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        if (!validation(user)) {
            console.log("Проверка пройдена");
        } else {
            console.log("Провал");
        }

        // createUserWithEmailAndPassword(auth, user.email, user.password).then(
        //     (userCredential) => {
        //         const auth = getAuth();

        //         // Signed up
        //         const person = userCredential.user;
        //         // console.log(person)
        //         // console.log(person.accessToken)
        //         // dispatch(
        //         //     loginUser({
        //         //         id: person.uid,
        //         //         name: user.name,
        //         //         surname: user.surname,
        //         //         email: user.email,
        //         //         // token: person.accessToken,
        //         //         phone: user.phone,
        //         //     })
        //         // );

        //         // addUserToDatabase({
        //         //     id: person.uid,
        //         //     name: user.name,
        //         //     surname: user.surname,
        //         //     email: user.email,
        //         //     phone: user.phone,
        //         // });

        //         navigate("/");
        //     }
        // );
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        // });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    // Почему не переключается чекбокс

    return (
        <div className="form">
            <input
                type="text"
                id="regname"
                className="form__input"
                name="name"
                placeholder="Имя"
                onChange={handleInputChange}
                value={user.name}
            />
            <input
                name="surname"
                type="text"
                id="regsurname"
                className="form__input"
                placeholder="Фамилия"
                value={user.surname}
                onChange={handleInputChange}
            />
            <input
                id="regphone"
                className="form__input"
                name="phone"
                type="tel"
                placeholder="Номер телефона"
                value={user.phone}
                onChange={handleInputChange}
            />
            <input
                id="regemail"
                className="form__input"
                name="email"
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={handleInputChange}
            />
            <input
                id="regpassword"
                className="form__input"
                name="password"
                type="password"
                placeholder="Пароль"
                value={user.password}
                onChange={handleInputChange}
            />
            <input
                id="regcheckPassword"
                className="form__input"
                name="checkPassword"
                type="password"
                placeholder="Повторите пароль"
                value={user.checkPassword}
                onChange={handleInputChange}
            />
            <div className="checkbox">
                <input
                    id="regisPassConfirm"
                    className="checkbox__input"
                    type="checkbox"
                    name="isPassConfirm"
                    // onClick={handleCheckboxChange}
                    // checked={user.isPassConfirm}
                />
                <label htmlFor="regisPassConfirm" className="checkbox__label">
                    Подтверждаю пароль
                </label>
            </div>
            <button
                className="button"
                name="save-data"
                onClick={handleSignUpClick}
            >
                Продолжить
            </button>
        </div>
    );
};
