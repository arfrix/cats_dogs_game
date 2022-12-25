import React, { useEffect, useState } from "react";
import { getDogPicUrl, getCatPicUrl } from "./getPicUrl";
import { useDispatch } from "react-redux";
import { incrementScore } from "../gameSlice";
import styles from "./Field.module.css";

export default function Field() {
	const dogAPIBaseUrl = "https://dog.ceo/api/breeds/image/random";
	const catAPIBaseUrl = "https://api.thecatapi.com/v1/images/search";
	const [picsList, setPicsList] = useState({ urls: [], isMixed: false });
	const [isAllPicsLoaded, setIsAllPicsLoaded] = useState(false);
	const dispatch = useDispatch();

	function picMixer(arrayState, setter) {
		const pics = [...arrayState];
		for (let i = pics.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[pics[i], pics[j]] = [pics[j], pics[i]];
		}
		setter({ urls: [...pics], isMixed: true });
	}

	function onClick(type) {
		dispatch(incrementScore());
	}

	function onLoad() {
		let loadedPicNumbers = 0;
		function loadedPicCounter() {
			loadedPicNumbers += 1;
			if (loadedPicNumbers === 9) setIsAllPicsLoaded(true);
		}
		return loadedPicCounter;
	}

	const loadedPicCounter = onLoad();

	useEffect(() => {
		getDogPicUrl(dogAPIBaseUrl, 7, setPicsList);
		getCatPicUrl(catAPIBaseUrl, 2, setPicsList);
	}, []);

	useEffect(() => {
		if (picsList.urls.length === 9 && !picsList.isMixed)
			picMixer(picsList.urls, setPicsList);
	}, [picsList]);

	return (
		<div>
			{picsList.isMixed &&
				picsList.urls.map((pic) => (
					<img
						className={
							isAllPicsLoaded ? styles["img--visible"] : styles["img--hidden"]
						}
						src={pic.url}
						onLoad={loadedPicCounter}
						onClick={() => onClick(pic.type)}
					/>
				))}
		</div>
	);
}
