import React, { useState } from "react";

export default function GetName() {
	const [name, setName] = useState(null);

	function handleSubmit(e) {
		e.preventDefault();
		console.log("clickes");
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input value={name} onChange={(e) => setName(e.target.value)} />
			</form>
		</div>
	);
}
