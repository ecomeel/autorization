import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useAsyncValue, useNavigate } from "react-router-dom";

import Input from "../Input/Input";
import Button from "../Button/Button";

import { getUserFromDatabase } from "../../firebase";
import { loginUser } from "../../store/slices/userSlice";

import "./login-form.scss";

export default function LoginForm() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();
    const navigate = useNavigate()

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

    function validation() {
        if (!areInputsFilled()) {
            alert("Заполните пустые поля");
            return false;
        }

        return true;
    }

    function handleInputChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }

    function handleSignIn() {
        if (!validation()) return;

        const auth = getAuth();
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                const person = userCredential.user;

                getUserFromDatabase(person.uid).then(data => {
                    dispatch(loginUser({
                        name: data.name,
                        surname: data.surname,
                        id: person.uid,
                        email: data.email,
                        token: person.accessToken,
                        phone: data.phone
                    }));

                    navigate('/')
                });



            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <div className="form">
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
                placeholder="Password"
                value={user.password}
                onChange={handleInputChange}
            />
            <Button text="Войти" handleBtnClick={handleSignIn} />
        </div>
    );
}
