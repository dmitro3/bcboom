import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: "game",
    initialState: {
        gameData: {
            winChance: 51,
            payout: 0.0001,
            rollUnder: 15,
            betAmount: (0.1).toFixed(4),
            diceNumber: [0],
        },
        loading: false,
        playing: false,
    },
    reducers: {
        setGameData(state, action) {
            state.gameData = action.payload;
        },
        setGameIsOn(state, action) {
            state.playing = action.payload;
        },
        setGameLoading(state, action) {
            state.loading = action.payload;
        },
    },
});

export const { setGameData, setGameIsOn, setGameLoading } = gameSlice.actions;
export const gameState = gameSlice.reducer;
