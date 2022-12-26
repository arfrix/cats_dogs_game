import axios from "axios";

export function apiHandler() {
	return {
		// in order to make urls array clean before each fetch i create this class and property which accessible by both functions and also will be cleaned on each obj instance
		urls: [],
		getDogPicUrl(baseUrl, number, setUrls) {
			for (let i = 0; i < number; i++) {
				axios.get(baseUrl).then((res) => {
					this.urls = [...this.urls, { url: res.data.message, type: "dog" }];
					setUrls({
						urls: [...this.urls],
						isMixed: false,
					});
				});
			}
		},
		getCatPicUrl(baseUrl, number, setUrls) {
			for (let i = 0; i < number; i++) {
				axios.get(baseUrl).then((res) => {
					this.urls = [...this.urls, { url: res.data[0].url, type: "cat" }];
					setUrls({
						urls: [...this.urls],
						isMixed: false,
					});
				});
			}
		},
	};
}
