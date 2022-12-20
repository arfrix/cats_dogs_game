import { useEffect, useState } from "react";

export default function useCountdownTimer(seconds, callBack) {
	const [counter, setCounter] = useState(seconds);

	useEffect(() => {
		counter === 0 && callBack();
		counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
	}, [counter]);
	return counter;
}
