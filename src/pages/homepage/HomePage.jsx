import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { useAuth } from "../../hooks/use-auth";
import { logoutUser } from "../../store/slices/userSlice";
import Button from "../../components/Button/Button";
import "./homepage.scss";

export default function HomePage() {
    const dispatch = useDispatch();
    const { isAuth, name, surname, phone, email } = useAuth();
    return isAuth ? (
        <div className="user">
            <h2 className="user__title">Привет, {name} {surname}!</h2>
            <p className="user__desc">Ты успешно зашел в свой аккаунт 🙂</p>
            <p className="user__data">Твой email: {email}</p>
            <p className="user__data">Твой номер телефона: {phone}</p>
            <Button
                text="Выйти"
                handleBtnClick={() => dispatch(logoutUser())}
            />
        </div>
    ) : (
        <Navigate to='/registration' />
    );
}
