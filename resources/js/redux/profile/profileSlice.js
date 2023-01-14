import { login } from "../auth/auth-slice";
import { profileFunctions } from "./profileApi";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMe = createAsyncThunk("me", async () => {
    const response = await profileFunctions.getMe();
    return response;
});

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profile: null,
    },
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload;
        },
    },
    extraReducers: {
        [getMe.fulfilled]: (state, action) => {
            if (action.payload.status === 200) {
                state.profile = action.payload.data;
            }
        },
        [login.fulfilled]: (state, action) => {
            if (action.payload.status === 200) {
                state.profile = action?.payload?.data?.user;
            }
        },
    },
});

export const { setProfile } = profileSlice.actions;
export const ProfileState = profileSlice.reducer;
