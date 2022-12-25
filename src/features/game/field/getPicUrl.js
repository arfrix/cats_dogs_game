import axios from "axios";

export function getDogPicUrl(baseUrl, number, setUrls) {
	for (let i = 0; i < number; i++) {
		axios.get(baseUrl).then((res) =>
			setUrls((prevState) => ({
				urls: [...prevState.urls, { url: res.data.message, type: "dog" }],
				isMixed: false,
			}))
		);
	}
}
export function getCatPicUrl(baseUrl, number, setUrls) {
	for (let i = 0; i < number; i++) {
		axios.get(baseUrl).then((res) =>
			setUrls((prevState) => ({
				urls: [...prevState.urls, { url: res.data[0].url, type: "cat" }],
				isMixed: false,
			}))
		);
	}
}
