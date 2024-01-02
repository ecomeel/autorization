import React from "react";

import Header from "../components/Header/Header";
import LoginForm from "../components/Login-form/LoginForm";
import AnotherLoginType from "../components/AnotherLoginType/AnotherLoginType";

export default function LoginPage() {
    return (
        <div>
            <Header
                title="Авторизация"
                description="Введите свои данные, чтобы войти а аккаунт"
            />
            <LoginForm />

            <AnotherLoginType
                title="Еще нет аккаунта ?"
                description="Регистрация"
                path="/registration"
            />
        </div>
    );
}
