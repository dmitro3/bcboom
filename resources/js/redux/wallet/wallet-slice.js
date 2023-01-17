import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { walletFunctions } from "./wallet-api";

export const getWallet = createAsyncThunk("wallet", async () => {
    const response = await walletFunctions.getWallet();
    return response;
});

const walletSlice = createSlice({
    name: "wallet",
    initialState: {
        modalState: { open: false, tab: 0 },
        wallet: {},
        level: {
            currentLevel: 0,
            nextLevel: 0,
            depositProgress: 0,
            betProgress: 0,
            maxWithdraw: 0,
            maxDeposit: 0,
            maxBet: 0,
        },
    },
    reducers: {
        setWalletModalState: (state, action) => {
            state.modalState = action.payload;
        },
        setWallet: (state, action) => {
            state.wallet = action.payload;
        },
        setLevel: (state, action) => {
            state.level = action.payload;
        },
    },
});

export const { setWalletModalState, setWallet, setLevel } = walletSlice.actions;
export const WalletState = walletSlice.reducer;
