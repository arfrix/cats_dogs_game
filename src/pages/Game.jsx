import React from "react";
import useCountdownTimer from "../features/game/timer/useTimer";

export default function Game() {
	const timer = useCountdownTimer(3, showResult);

	function showResult() {}

	return <div>{timer}</div>;
}
