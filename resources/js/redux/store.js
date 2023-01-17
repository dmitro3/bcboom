import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { AppState } from "./app-state/app-slice";
import { AuthState } from "./auth/auth-slice";
import { WalletState } from "./wallet/wallet-slice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";
import { ProfileState } from "./profile/profileSlice";
const rootReducer = combineReducers({
    app: AppState,
    auth: AuthState,
    wallet: WalletState,
    profile: ProfileState,
});
const env = (key) => `{{ env(${key})  }}`;

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["auth", "profile"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
    devTools: env("APP_ENV") !== "production",
});
export const persistor = persistStore(store);
export default store;
