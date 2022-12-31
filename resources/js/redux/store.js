import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { AppState } from "./app-state/app-slice";
import { AuthState } from "./auth/auth-slice";
import { WalletState } from "./wallet/wallet-slice";

const rootReducer = combineReducers({
    app: AppState,
    auth: AuthState,
    wallet: WalletState,
});
const env = (key) => `{{ env(${key})  }}`;
const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: env("APP_ENV") !== "production",
});

export default store;
