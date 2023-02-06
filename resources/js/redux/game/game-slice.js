import { createSlice } from "@reduxjs/toolkit"

const gameSlice = createSlice({
    name: "game",
    initialState: {
        game: null,
        loading: false,
        playing: false,
    },
    reducers: {
        setGame(state, action) {
            state.game = action.payload;
        },
        setGameIsOn(state, action) {
            state.playing = action.payload;
        },
    },
});

export const { setGame, setGameIsOn } = gameSlice.actions;
export const gameState = gameSlice.reducer;
