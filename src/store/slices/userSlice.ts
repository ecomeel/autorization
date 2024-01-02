import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/data";

interface CurrentUser extends User {
    id?: string | number,
}

const initialState:CurrentUser = {
    name: null,
    surname: null,
    phone: null,
    email: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser(state, action: PayloadAction<CurrentUser>) {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.surname = action.payload.surname;
            state.phone = action.payload.phone;
            state.email = action.payload.email;
        },
        logoutUser(state) {
            state.id = 0
            state.name = null;
            state.surname = null;
            state.phone = null;
            state.email = null;
        },
    },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
