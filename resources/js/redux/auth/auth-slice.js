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

export const logout = createAsyncThunk("logout", async () => {
    try {
        const response = await authFunctions.logout();
        return response;
    } catch (error) {
        return error;
    }
});

export const signup = createAsyncThunk("signup", async (payload) => {
    try {
        const response = await authFunctions.signup(payload);
        return response;
    } catch (error) {
        return error;
    }
});

export const sendForgotPasswordMail = createAsyncThunk(
    "sendForgotPasswordMail",
    async (payload) => {
        try {
            const response = await authFunctions.forgotPassword(payload);
            return response;
        } catch (error) {
            return error;
        }
    }
);

export const resetPassword = createAsyncThunk(
    "resetPassword",
    async (payload) => {
        try {
            const response = await authFunctions.resetPassword(payload);
            return response;
        } catch (error) {
            return error;
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        modalState: { open: false, type: "login" },
        user: {
            user: null,
        },
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
        [signup.fulfilled]: (state, action) => {
            if (action.payload.status === 200) {
                state.user = action.payload.data;
            }
        },
        [logout.fulfilled]: (state, action) => {
            // if (action.payload.status === 200) {
            state.user = { user: null };
            localStorage.clear();
            // }
        },
    },
});

export const { setAuthModalState } = authSlice.actions;
export const AuthState = authSlice.reducer;
