import React, { useEffect, useState } from "react";
import { getDogPicUrl, getCatPicUrl } from "./getPicUrl";
import styles from "./Field.module.css";

export default function Field() {
	const dogAPIBaseUrl = "https://dog.ceo/api/breeds/image/random";
	const catAPIBaseUrl = "https://api.thecatapi.com/v1/images/search";
	const [picsList, setPicsList] = useState({ urls: [], isMixed: false });
	const [isAllPicsLoaded, setIsAllPicsLoaded] = useState(false);

	function picMixer(arrayState, setter) {
		const pics = [...arrayState];
		for (let i = pics.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[pics[i], pics[j]] = [pics[j], pics[i]];
		}
		setter({ urls: [...pics], isMixed: true });
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
				picsList.urls.map((url) => (
					<img
						className={
							isAllPicsLoaded ? styles["img--visible"] : styles["img--hidden"]
						}
						src={url}
						onLoad={loadedPicCounter}
					/>
				))}
		</div>
	);
}
