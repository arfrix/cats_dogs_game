import axios from "axios";

const baseUrl = "https://dog.ceo/api/breeds/image/random";

export default function getPicUrl() {
	axios.get(baseUrl).then((res) => console.log(res));
}
