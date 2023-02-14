import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const saveGame = createAsyncThunk("game/new", async (payload) => {
    const response = await gameApiFunctions.saveGame(payload);
    return response;
});

const gameSlice = createSlice({
    name: "game",
    initialState: {
        gameData: {
            winChance: 41,
            payout: 0.1,
            rollUnder: { type: "under", value: "0 - 9" },
            betAmount: (0.4).toFixed(4),
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
    extraReducers: {
        [saveGame.fulfilled]: (_, action) => {
            store.getState().wallet = action.payload.data.wallet;
        },
    },
});

export const { setGameData, setGameIsOn, setGameLoading } = gameSlice.actions;
export const gameState = gameSlice.reducer;
