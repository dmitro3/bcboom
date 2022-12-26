import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
    name: "wallet",
    initialState: {
        modalState: { open: false, type: "deposit" },
    },
    reducers: {
        setWalletModalState: (state, action) => {
            state.modalState = action.payload;
        },
    },
});

export const { setWalletModalState } = walletSlice.actions;
export const WalletState = walletSlice.reducer;
