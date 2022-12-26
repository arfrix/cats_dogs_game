import React, { useEffect, useState } from "react";
import { getDogPicUrl, getCatPicUrl } from "./getPicUrl";
import { useDispatch, useSelector } from "react-redux";
import { decreaseScore, increaseScore, setPicLoading } from "../gameSlice";
import styles from "./Field.module.css";

export default function Field() {
	const dogAPIBaseUrl = "https://dog.ceo/api/breeds/image/random";
	const catAPIBaseUrl = "https://api.thecatapi.com/v1/images/search";
	const [picsList, setPicsList] = useState({ urls: [], isMixed: false });
	const [loadedPicNumbers, setLoadedPicNumbers] = useState(0);
	const [isAllPicsLoaded, setIsAllPicsLoaded] = useState(false);
	const dispatch = useDispatch();
	const gameTarget = useSelector((state) => state.game.gameTarget);
	const loading = useSelector((state) => state.game.isPicLoading);

	function picMixer(arrayState, setter) {
		const pics = [...arrayState];
		for (let i = pics.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[pics[i], pics[j]] = [pics[j], pics[i]];
		}
		setter({ urls: [...pics], isMixed: true });
	}

	function onClick(type) {
		if (type === gameTarget) {
			dispatch(increaseScore());
		} else {
			dispatch(decreaseScore());
		}
		dispatch(setPicLoading(true));
		setIsAllPicsLoaded(false);
		setLoadedPicNumbers(0);
		getPics();
	}

	function onLoad() {
		setLoadedPicNumbers((prevState) => prevState + 1);
	}

	function getPics() {
		dispatch(setPicLoading(true));
		setPicsList({ urls: [], isMixed: false });
		getDogPicUrl(dogAPIBaseUrl, 7, setPicsList);
		getCatPicUrl(catAPIBaseUrl, 2, setPicsList);
	}

	useEffect(() => {
		getPics();
	}, []);

	useEffect(() => {
		if (picsList.urls.length === 9 && !picsList.isMixed)
			picMixer(picsList.urls, setPicsList);

		// is there a proper place to dispatch setPicLoading() ? because put it at the end of picMixer() can't guarantee that execute it after setter !
		if (picsList.urls.length === 9 && picsList.isMixed)
			dispatch(setPicLoading(false));
	}, [picsList]);

	useEffect(() => {
		if (loadedPicNumbers === 9) setIsAllPicsLoaded(true);
	}, [loadedPicNumbers]);

	return (
		<div>
			{loading ? (
				<div> loading </div>
			) : (
				picsList.isMixed &&
				picsList.urls.map((pic) => (
					<img
						className={
							isAllPicsLoaded ? styles["img--visible"] : styles["img--hidden"]
						}
						src={pic.url}
						onLoad={onLoad}
						onClick={() => onClick(pic.type)}
					/>
				))
			)}
		</div>
	);
}
