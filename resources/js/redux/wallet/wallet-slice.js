import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { walletFunctions } from "./wallet-api";

export const getWallet = createAsyncThunk("wallet", async () => {
    const response = await walletFunctions.getWallet();
    return response;
});

const walletSlice = createSlice({
    name: "wallet",
    initialState: {
        modalState: { open: false, tab: 0},
    },
    reducers: {
        setWalletModalState: (state, action) => {
            state.modalState = action.payload;
        },
        setWallet: (state, action) => {
            state.wallet = action.payload;
        },
    },
});

export const { setWalletModalState, setWallet } = walletSlice.actions;
export const WalletState = walletSlice.reducer;
