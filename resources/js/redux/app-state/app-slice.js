import { createSlice } from "@reduxjs/toolkit";

const appStateSlice = createSlice({
    name: "appState",
    initialState: {
        isAppLoading: false,
        isAppError: false,
        appErrorMessage: "",
        drawerState: { open: false },
    },
    reducers: {
        setIsAppLoading: (state, action) => {
            state.isAppLoading = action.payload;
        },
        setDrawerState: (state, action) => {
            state.drawerState = action.payload;
        },
    },
});

export const { setIsAppLoading, setDrawerState } = appStateSlice.actions;
export const AppState = appStateSlice.reducer;
