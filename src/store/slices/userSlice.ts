import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ItfUser } from "../../types/data";

interface ItfInitialState {
    name: null | string,
    surname: null | string,
    phone: null | string,
    email: null | string,
    id: null | string | number,
    token: null | string,
}

const initialState:ItfInitialState = {
    name: null,
    surname: null,
    phone: null,
    email: null,
    id: null,
    token: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser(state, action: PayloadAction<ItfUser>) {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.surname = action.payload.surname;
            state.phone = action.payload.phone;
            state.email = action.payload.email;
            // state.token = action.payload.token;
        },
        logoutUser(state) {
            state.id = null;
            state.name = null;
            state.surname = null;
            state.phone = null;
            state.email = null;
            state.token = null;
        },
    },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
