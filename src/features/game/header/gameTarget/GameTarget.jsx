import React, { useEffect, useState } from "react";

export default function GameTarget() {
	const [targetAnimal, setTargetAnimal] = useState("");

	useEffect(() => {
		setTargetAnimal(Math.round(Math.random()) ? "Cats" : "Dogs");
	}, []);

	return <div>Please select {targetAnimal}</div>;
}
