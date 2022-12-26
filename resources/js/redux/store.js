import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { AppState } from "./app-state/app-slice";
import { AuthState } from "./auth/auth-slice";

const rootReducer = combineReducers({
    app: AppState,
    auth: AuthState,
});
const env = (key) => `{{ env(${key})  }}`;
const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: env("APP_ENV") !== "production",
});

export default store;
