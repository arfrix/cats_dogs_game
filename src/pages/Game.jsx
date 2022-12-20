import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../features/game/header/Header";
("react-router-dom");
import useCountdownTimer from "../features/game/header/timer/useTimer";

export default function Game() {
	const timer = useCountdownTimer(3, showResult);
	const navigate = useNavigate();

	function showResult() {
		// navigate("/result");
	}

	return (
		<div>
			<Header remainTime={timer} />
		</div>
	);
}
