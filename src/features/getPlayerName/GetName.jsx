import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GetName() {
	const [name, setName] = useState(null);
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		navigate("/game");
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input value={name} onChange={(e) => setName(e.target.value)} />
			</form>
		</div>
	);
}
