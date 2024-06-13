import axios from "axios";
let apiKey = import.meta.env.VITE_APIKEY;
export let fetchData = async (query, loaderState, errState, resState, err) => {
	if (query !== "") {
		try {
			let res = await axios.get(
				`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`
			);
			resState((p) => (p = res.data));
			loaderState((p) => (p = !p));
			console.info("win");
			if (err) {
				errState((p) => (p = !p));
			}
		} catch (error) {
			errState((p) => (p = !p));
			console.info("loss");
		}
	}
};

export let fetchInstruction = async (foodId, resState, errState) => {
	try {
		let res = await axios.get(
			`https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${apiKey}`
		);
		resState((p) => (p = res.data));
		console.info("instruction gotten succesfully");
	} catch (error) {
		errState((p) => (p = !p));
		console.info("instruction met with an error");
	}
};
