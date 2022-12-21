import axios from "axios";

export function getDogPicUrl(baseUrl, number, setUrls) {
	for (let i = 0; i <= number; i++) {
		axios
			.get(baseUrl)
			.then((res) => setUrls((prevState) => [...prevState, res.data.message]));
	}
}
export function getCatPicUrl(baseUrl, number, setUrls) {
	for (let i = 0; i <= number; i++) {
		axios
			.get(baseUrl)
			.then((res) => setUrls((prevState) => [...prevState, res.data[0].url]));
	}
}
