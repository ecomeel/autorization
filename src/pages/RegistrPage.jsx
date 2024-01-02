import React from "react";

import Header from "../components/Header/Header";
import RegistrForm from "../components/Registr-Form/RegistrForm";
import AnotherLoginType from "../components/AnotherLoginType/AnotherLoginType";

export default function RegistrPage() {
    return (
        <div>
            <Header
                title="Создание аккаунта"
                description="Введите свои данные, чтобы создать аккаунт в сервисе"
            />
            <RegistrForm />
            <AnotherLoginType
                title="Уже есть аккаунт ?"
                description="Войти"
                path="/login"
            />
        </div>
    );
}
