import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import infinityBlack from "../assets/InfinityBlue.svg";
import infinityGreen from "../assets/InfinityGreen.svg";
import SearchResultsCard from "./SearchResultsCard";
import { sampleData, sampleInstruction } from "../utils/SampleData";

const SearchResults = () => {
	// console.log(sampleData.results)
	let { results, theme, err } = useContext(ThemeContext);
	if (err) {
		return (
			<div
				className={`h-[80%] flex justify-center items-center px-2 text-[1.2rem] font-semibold font-mono ${
					theme == "light" ? "text-black" : "text-white"
				}`}
			>
				<p>
					Sorry we ran into an error while fetching data pls check your internet connection or
					reload the app again...
				</p>
			</div>
		);
	}
	if (results == null) {
		return (
			<div className=' border-black w-[95%] mx-auto mt-5 h-[82%] flex justify-center items-center '>
				<img
					src={theme == "light" ? infinityGreen : infinityBlack}
					alt=''
				/>
			</div>
		);
	}
	return (
		<div className='border-black w-[95%] mx-auto mt-5 flex justify-evenly flex-col gap-8 py-4 '>
			{results.results.map((item) => (
				<SearchResultsCard
					key={item.id}
					heading={item.title}
					imgUrl={item.image}
					id={item.id}
				/>
			))}
		</div>
	);
};

export default SearchResults;
