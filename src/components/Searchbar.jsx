import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { fetchData } from "../utils/FetchData";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { useEffect } from "react";

const Searchbar = () => {
	let [query, setQuery] = useState("");
	let { theme, setResults, setErr, setLoading, err } = useContext(ThemeContext);
	let searchTerm = (term) => {
		fetchData(term, setLoading, setErr, setResults, err);
	};

	useEffect(() => {
		let test = "pasta";
		fetchData(test, setLoading, setErr, setResults);
	}, []);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				setQuery((p) => (p = ""));
			}}
			className={` border-2 p-1 ${
				theme == "light" ? " border-LSC text-black" : " border-DSC text-white"
			} rounded-[0.4rem] h-[3rem] w-[90%] mx-auto mt-[6rem] flex font-medium font-monts`}
		>
			<input
				className='outline-none h-full w-[90%] px-2 bg-transparent border-none'
				type='text'
				id='text'
				placeholder='type name of cuisine e.g pasta'
				value={query}
				onChange={(e) => setQuery((p) => (p = e.target.value))}
			/>
			<button
				className={`border-none text-[1.4rem] ${theme == "light" ? "text-LSC" : "text-DSC"}`}
				onClick={() => searchTerm(query)}
			>
				<BiSearch />
			</button>
		</form>
	);
};

export default Searchbar;
