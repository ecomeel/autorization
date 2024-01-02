import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useAuth = () => {
    const { name, surname, email, id, phone } = useSelector(
        (state: RootState) => state.user
    );

    return {
        isAuth: !!email,
        name,
        email,
        surname,
        id,
        phone,
    };
};
