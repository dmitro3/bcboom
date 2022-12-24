import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        modalState: { open: false, type: "login" },
    },
    reducers: {
        setAuthModalState: (state, action) => {
            state.modalState = action.payload;
        },
    },
});

export const { setAuthModalState } = authSlice.actions;
export const AuthState = authSlice.reducer;
