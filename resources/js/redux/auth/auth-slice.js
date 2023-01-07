import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authFunctions from "./auth-api";

export const login = createAsyncThunk("login", async (payload) => {
    try {
        const response = await authFunctions.login(payload);
        return response;
    } catch (error) {
        return error;
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        modalState: { open: false, type: "login" },
        user: null,
    },
    reducers: {
        setAuthModalState: (state, action) => {
            state.modalState = action.payload;
        },
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            if (action.payload.status === 200) {
                state.user = action.payload.data;
            }
        },
    },
});

export const { setAuthModalState } = authSlice.actions;
export const AuthState = authSlice.reducer;
