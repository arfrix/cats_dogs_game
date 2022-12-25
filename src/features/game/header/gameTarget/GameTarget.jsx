import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setGameTarget } from "../../gameSlice";

export default function GameTarget() {
	const [targetAnimal, setTargetAnimal] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		const target = Math.round(Math.random()) ? "Cats" : "Dogs";
		dispatch(setGameTarget(target));
	}, []);

	return <div>Please select {targetAnimal}</div>;
}
