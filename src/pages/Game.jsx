import React from "react";
import { useNavigate } from "react-router-dom";
("react-router-dom");
import useCountdownTimer from "../features/game/timer/useTimer";

export default function Game() {
	const timer = useCountdownTimer(3, showResult);
	const navigate = useNavigate();

	function showResult() {
		navigate("/result");
	}

	return <div>{timer}</div>;
}
