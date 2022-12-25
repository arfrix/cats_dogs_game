import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	score: 0,
	gameTarget: "",
};

export const gameSlice = createSlice({
	name: "game",
	initialState,
	reducers: {
		incrementScore: (state) => {
			state.score += 1;
		},
		setGameTarget: (state, action) => {
			state.gameTarget = action.payload;
		},
	},
});

export const { incrementScore, setGameTarget } = gameSlice.actions;

export default gameSlice.reducer;
