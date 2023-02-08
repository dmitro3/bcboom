import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { AppState } from "./app-state/app-slice";
import { AuthState } from "./auth/auth-slice";
import { gameState } from "./game/game-slice";
import { ProfileState } from "./profile/profileSlice";
import { WalletState } from "./wallet/wallet-slice";
const rootReducer = combineReducers({
    app: AppState,
    auth: AuthState,
    wallet: WalletState,
    profile: ProfileState,
    game: gameState,
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
