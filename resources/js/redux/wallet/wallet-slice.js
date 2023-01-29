import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { walletFunctions } from "./wallet-api";

export const getWallet = createAsyncThunk("wallet", async () => {
    const response = await walletFunctions.getWallet();
    return response;
});

export const deposit = createAsyncThunk("deposit", async (amount) => {
    try {
        const response = await walletFunctions.deposit(amount);
        return response;
    } catch (error) {
        return error;
    }
});

export const widthdraw = createAsyncThunk("widthdraw", async (amount) => {
    try {
        const response = await walletFunctions.widthdraw(amount);
        return response;
    } catch (error) {
        return error;
    }
});

export const allPayments = createAsyncThunk("all/payments", async () => {
    try {
        const response = walletFunctions.allPayments();
        return response;
    } catch (error) {
        return error;
    }
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
    extraReducers: {
        [getWallet.fulfilled]: (state, action) => {
            if (action.payload.status === 200) {
                state.wallet = action.payload.data;
            }
        },
        [deposit.fulfilled]: (state, action) => {
            if (action.payload.status === 200) {
                state.wallet.deposit = state.wallet.deposit + action?.meta?.arg;
            }
        },
    },
});

export const { setWalletModalState, setWallet, setLevel } = walletSlice.actions;
export const WalletState = walletSlice.reducer;
