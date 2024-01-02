import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
        loginUser(state, action) {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.surname = action.payload.surname;
            state.phone = action.payload.phone;
            state.email = action.payload.email;
            state.token = action.payload.token;
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
