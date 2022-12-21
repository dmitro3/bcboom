import { createSlice } from "@reduxjs/toolkit";

const appStateSlice = createSlice({
    name: 'appState',
    initialState: {
        isAppLoading: false,
        isAppError: false,
        appErrorMessage: '',
    },
    reducers: {
        setIsAppLoading: (state, action) => {
            state.isAppLoading = action.payload;
        }
    }
});


export const { setIsAppLoading } = appStateSlice.actions;
export const AppState =  appStateSlice.reducer;