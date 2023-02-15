import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import store from "../store";
import gameApiFunctions from "./game-api";

export const saveGame = createAsyncThunk("game/new", async (payload) => {
    const response = await gameApiFunctions.saveGame(payload);
    return response;
});

export const fetchAllGames = createAsyncThunk("game/all", async () => {
    const response = await gameApiFunctions.fetchAllGames();
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
        allGames: [],
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
        setAllGames(state, action) {
            state.allGames = action.payload;
        },
    },
    extraReducers: {
        [fetchAllGames.fulfilled]: (state, action) => {
            state.allGames = action.payload.data.wallet;
        },
    },
});

export const { setGameData, setGameIsOn, setGameLoading, setAllGames } =
    gameSlice.actions;
export const gameState = gameSlice.reducer;
