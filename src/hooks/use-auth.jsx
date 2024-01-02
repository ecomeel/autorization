import { useSelector } from "react-redux";

export function useAuth() {
    const { name, surname, email, id, phone, token } = useSelector(
        (state) => state.user
    );

    return {
        isAuth: !!email,
        name,
        email,
        surname,
        id,
        phone,
        token,
    };
}
