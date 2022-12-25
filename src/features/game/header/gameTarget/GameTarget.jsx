import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGameTarget } from "../../gameSlice";

export default function GameTarget() {
	const dispatch = useDispatch();
	const gameTarget = useSelector((state) => state.game.gameTarget);

	useEffect(() => {
		const target = Math.round(Math.random()) ? "cat" : "dog";
		dispatch(setGameTarget(target));
	}, []);

	return <div>Please select {gameTarget}</div>;
}
