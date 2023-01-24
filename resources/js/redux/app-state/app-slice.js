import { createSlice } from "@reduxjs/toolkit";

const appStateSlice = createSlice({
    name: "appState",
    initialState: {
        isAppLoading: false,
        isAppError: false,
        appErrorMessage: "",
        drawerState: { open: false },
        sound: {
            muted: false,
            currentSound: "/sounds/intro_casino.mp3",
            page: "/",
            id: "intro_casino",
        },
    },
    reducers: {
        setIsAppLoading: (state, action) => {
            state.isAppLoading = action.payload;
        },
        setDrawerState: (state, action) => {
            state.drawerState = action.payload;
        },
        setSound: (state, action) => {
            const current = state.sound;
            Object.entries(current).forEach(
                () => (current[action.payload.field] = action.payload.value)
            );
            state.sound = current;
        },
    },
});

export const { setIsAppLoading, setDrawerState, setSound } =
    appStateSlice.actions;
export const AppState = appStateSlice.reducer;
