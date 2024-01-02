import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { addUserToDatabase } from "../../firebase";
import { loginUser } from "../../store/slices/userSlice";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import "./registr-form.scss";

export default function Form() {
    const [user, setUser] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        password: "",
        checkPassword: "",
        isPassConfirm: false,
    });
    const auth = getAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function areInputsFilled() {
        let noError = true;
        for (let param in user) {
            if (param == "isPassConfirm") continue;

            const input = document.getElementById(param);

            if (input.value === "") {
                input.classList.add("red-border");
                noError = false;
            } else {
                input.classList.remove("red-border");
            }
        }
        return noError;
    }

    function arePasswordsMatch() {
        const pass = document.getElementById("password");
        const checkPass = document.getElementById("checkPassword");

        if (user.password === user.checkPassword) {
            pass.classList.remove("red-border");
            checkPass.classList.remove("red-border");
            return true;
        } else {
            const pass = document.getElementById("password");
            const checkPass = document.getElementById("checkPassword");

            pass.value = "";
            checkPass.value = "";

            pass.classList.add("red-border");
            checkPass.classList.add("red-border");
            return false;
        }
    }

    function validation() {
        if (!areInputsFilled()) {
            alert("Заполните пустые поля");
            return false;
        }

        if (!arePasswordsMatch()) {
            alert("Пароли не совпадают");
            return false;
        }

        if (!user.isPassConfirm) {
            alert("Подтвердите пароль");
            return false;
        }

        return true;
    }

    function handleSignUp() {
        if (!validation()) {
            return;
        }

        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed up
                const person = userCredential.user;

                dispatch(
                    loginUser({
                        id: person.uid,
                        name: user.name,
                        surname: user.surname,
                        email: user.email,
                        token: person.accessToken,
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

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    function handleInputChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }

    function handleCheckboxChange(e) {
        setUser({
            ...user,
            isPassConfirm: e.target.checked,
        });
    }

    return (
        <div className="form">
            <Input
                name="name"
                type="text"
                placeholder="Имя"
                value={user.name}
                onChange={handleInputChange}
            />

            <Input
                name="surname"
                type="text"
                placeholder="Фамилия"
                value={user.surname}
                onChange={handleInputChange}
            />
            <Input
                name="phone"
                type="tel"
                placeholder="Номер телефона"
                value={user.phone}
                onChange={handleInputChange}
            />
            <Input
                name="email"
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={handleInputChange}
            />
            <Input
                name="password"
                type="password"
                placeholder="Пароль"
                value={user.password}
                onChange={handleInputChange}
            />
            <Input
                name="checkPassword"
                type="password"
                placeholder="Повторите пароль"
                value={user.checkPassword}
                onChange={handleInputChange}
            />
            <Checkbox
                name="pass-confirmation"
                label="Подтверждаю пароль"
                isConfirm={user.isPassConfirm}
                onChange={handleCheckboxChange}
            />
            <Button
                name="save-data"
                text="Продолжить"
                handleBtnClick={handleSignUp}
            />
        </div>
    );
}
