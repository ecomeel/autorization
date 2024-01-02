import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUserFromDatabase } from "../../firebase.js";
import { loginUser } from "../../store/slices/userSlice";

import { areInputsEmpty } from "../../hooks/useValidation.js";

import '../form-styles/form.scss'

export const LoginForm: React.FC = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSignIn() {
        if (areInputsEmpty(user)) return;

        const auth = getAuth();
        signInWithEmailAndPassword(auth, user.email, user.password).then(
            (userCredential) => {
                const person = userCredential.user;

                getUserFromDatabase(person.uid).then((data: any) => {
                    dispatch(
                        loginUser({
                            name: data.name,
                            surname: data.surname,
                            id: person.uid,
                            email: data.email,
                            phone: data.phone,
                        })
                    );

                    navigate("/");
                });
            }
        )
        .catch((error) => console.log(error.code, error.message));
    }

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
        e
    ) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="form">
            <input
                name="email"
                type="email"
                placeholder="Email"
                className="form__input"
                value={user.email}
                onChange={handleInputChange}
            />
            <input
                name="password"
                type="password"
                placeholder="Password"
                className="form__input"
                value={user.password}
                onChange={handleInputChange}
            />
            <button className="button" name="save-data" onClick={handleSignIn}>
                Войти
            </button>
        </div>
    );
};
