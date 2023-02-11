import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: "game",
    initialState: {
        gameData: {
            winChance: 51,
            payout: 1.5,
            rollUnder: 15,
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
