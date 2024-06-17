import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { fetchData } from "../utils/FetchData";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const Searchbar = () => {
	let [query, setQuery] = useState("");
	let { theme, setResults, setErr, setLoading, err, setPrevTerm } = useContext(ThemeContext);

	//function to fetch query from database
	let searchTerm = (term) => {
		setPrevTerm((p) => (p = term));
		fetchData(term, setLoading, setErr, setResults, err);
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				setQuery((p) => (p = ""));
			}}
			className={` border-2 p-1 ${
				theme == "light" ? " border-LSC text-black" : " border-DSC text-white"
			} rounded-[0.4rem] h-[3rem] md:h-[5rem] lg:h-[3rem] w-[90%] lg:w-[70%] mx-auto mt-[6rem] md:mt-[8rem] lg:mt-[6rem] flex font-medium font-monts`}
		>
			<input
				className='outline-none h-full w-[90%] px-2 bg-transparent border-none md:text-[1.4rem] lg:text-[1.2rem]'
				type='text'
				id='text'
				placeholder='type name of cuisine e.g pasta'
				value={query}
				onChange={(e) => setQuery((p) => (p = e.target.value))}
			/>
			<button
				className={`border-none text-[1.4rem] md:text-[2.4rem] lg:text-[1.6rem] ${
					theme == "light" ? "text-LSC" : "text-DSC"
				}`}
				onClick={() => searchTerm(query)}
			>
				<BiSearch />
			</button>
		</form>
	);
};

export default Searchbar;
