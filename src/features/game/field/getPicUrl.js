import axios from "axios";

export function getDogPicUrl(baseUrl, number, setUrls) {
	for (let i = 0; i < number; i++) {
		axios.get(baseUrl).then((res) =>
			setUrls((prevState) => ({
				urls: [...prevState.urls, res.data.message],
				isMixed: false,
			}))
		);
	}
}
export function getCatPicUrl(baseUrl, number, setUrls) {
	for (let i = 0; i < number; i++) {
		axios.get(baseUrl).then((res) =>
			setUrls((prevState) => ({
				urls: [...prevState.urls, res.data[0].url],
				isMixed: false,
			}))
		);
	}
}
