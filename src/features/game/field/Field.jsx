import React, { useEffect } from "react";
import getPicUrl from "./getPicUrl";

export default function Field() {
	useEffect(() => {
		getPicUrl();
	}, []);

	return <div>Field</div>;
}
