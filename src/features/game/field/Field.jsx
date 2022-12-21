import React, { useEffect, useState } from "react";
import { getDogPicUrl, getCatPicUrl } from "./getPicUrl";

export default function Field() {
	const dogAPIBaseUrl = "https://dog.ceo/api/breeds/image/random";
	const catAPIBaseUrl = "https://api.thecatapi.com/v1/images/search";
	const [dogPicUrls, setDogPicUrls] = useState([]);
	const [catPicUrls, setCatPicUrls] = useState([]);
	const [picsList, setPicsList] = useState([]);

	function picMixer() {
		const dogsPic = [...dogPicUrls];
		const catsPic = [...catPicUrls];
		for (let i = 0; i < 9; i++) {
			const isCatPicTurn = !!Math.round(Math.random());
			const catPic = isCatPicTurn && !!catsPic.length && catsPic.shift();
			const dogPic = !isCatPicTurn && !!dogsPic.length && dogsPic.shift();
			console.log(isCatPicTurn);
			console.log("catPic", catPic);
			console.log("dogPic", dogPic);
			//setPicsList((prevState) => [...prevState,]);
		}
	}

	useEffect(() => {
		getDogPicUrl(dogAPIBaseUrl, 7, setDogPicUrls);
		getCatPicUrl(catAPIBaseUrl, 2, setCatPicUrls);
	}, []);

	return (
		<div>
			<button onClick={picMixer}>mix</button>
		</div>
	);
}
