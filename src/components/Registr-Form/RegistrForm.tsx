import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { addUserToDatabase } from "../../firebase";
import { loginUser } from "../../store/slices/userSlice";

import '../form-styles/form.scss'

import { validation } from "../../hooks/useValidation.ts";

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

    function handleSignUpClick(): void {
        if (!validation(user)) return;

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, user.email, user.password).then(
            (userCredential) => {
                const person = userCredential.user;

                dispatch(
                    loginUser({
                        id: person.uid,
                        name: user.name,
                        surname: user.surname,
                        email: user.email,
                        phone: user.phone,
                    })
                );

                addUserToDatabase({
                    id: person.uid,
                    name: user.name,
                    surname: user.surname,
                    email: user.email,
                    phone: user.phone,
                });

                navigate("/");
            }
        ).catch((error) => console.log(error.code, error.message))
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };
    function handleConfirm(): void {
        setUser({
            ...user,
            isPassConfirm: !user.isPassConfirm,
        });
    }

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
                    onChange={handleConfirm}
                    checked={user.isPassConfirm}
                />
                <label htmlFor="regisPassConfirm" className="checkbox__label">
                    Подтверждаю пароль
                </label>
            </div>
            <button
                className="button"
                name="save-data"
                onClick={() => handleSignUpClick()}
            >
                Продолжить
            </button>
        </div>
    );
};
