import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useAuth } from "../../hooks/use-auth.ts";
import { logoutUser } from "../../store/slices/userSlice.ts";
import "./homepage.scss";

export const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const { isAuth, name, surname, phone, email } = useAuth();
    return isAuth ? (
        <div className="user">
            <h2 className="user__title">
                Привет, {name} {surname}!
            </h2>
            <p className="user__desc">Ты успешно зашел в свой аккаунт 🙂</p>
            <p className="user__data">Твой email: {email}</p>
            <p className="user__data">Твой номер телефона: {phone}</p>
            <button className="button" onClick={() => dispatch(logoutUser())}>
                Выйти
            </button>
        </div>
    ) : (
        <Navigate to="/registration" />
    );
};
