import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useAuth } from "../../hooks/use-auth.ts";
import { logoutUser } from "../../store/slices/userSlice.ts";
import Button from "../../components/Button/Button.tsx";
import "./homepage.scss";

const HomePage: React.FC = () => {
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
                handlebtnClick={() => dispatch(logoutUser())}
            />
        </div>
    ) : (
        <Navigate to='/registration' />
    );
}

export default HomePage
