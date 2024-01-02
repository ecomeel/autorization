import React from "react";

import Header from "../components/Header/Header";
import { LoginForm } from "../components/Login-form/LoginForm.tsx";
import AnotherLoginType from "../components/AnotherLoginType/AnotherLoginType.tsx";

export const LoginPage: React.FC = () => {
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
};
