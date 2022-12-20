import React from "react";
import GameTarget from "./gameTarget/GameTarget";

export default function Header({ remainTime }) {
	return (
		<div>
			<div>{remainTime}</div>
			<GameTarget />
		</div>
	);
}
