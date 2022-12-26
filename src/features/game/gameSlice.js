import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	score: 0,
	gameTarget: "",
	isPicLoading: true,
};

export const gameSlice = createSlice({
	name: "game",
	initialState,
	reducers: {
		increaseScore: (state) => {
			state.score += 1;
		},
		decreaseScore: (state) => {
			state.score -= 0.5;
		},
		setGameTarget: (state, action) => {
			state.gameTarget = action.payload;
		},
		setPicLoading: (state, action) => {
			state.isPicLoading = action.payload;
		},
	},
});

export const { increaseScore, decreaseScore, setGameTarget, setPicLoading } =
	gameSlice.actions;

export default gameSlice.reducer;
