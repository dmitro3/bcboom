import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AppState } from "./app-state/app-slice";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    app: AppState,
});
const env = (key) => `{{ env(${key})  }}`;
const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: env("APP_ENV") !== "production",
});

export default store;
