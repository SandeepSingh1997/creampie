import { UserState } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialUserState =  {
    username: null,
    email: null,
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: "user",
    initialState:initialUserState,
    reducers: {
        login: (state, payload)=>{
            const userPayload : UserState= payload.payload;
            state.username = payload.payload.username;
            state.email = payload.payload.email;
            state.isLoggedIn = true;
        }, 
        logout: (state)=>{
            state.username = null;
            state.email = null;
            state.isLoggedIn = false;
        }, 
    }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;