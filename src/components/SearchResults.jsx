import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import SearchResultsCard from "./SearchResultsCard";
import { motion } from "framer-motion";

const SearchResults = () => {
	let { results, theme, err, prevTerm } = useContext(ThemeContext);

	const parentVariants = {
		initial: { opacity: 1 },
		animate: {
			transition: {
				staggerChildren: 0.1, // adjust this value to control the delay between children animations
			},
		},
	};

	//component to render if user searched for term not available in api
	let EmptyResComponent = ({ term }) => {
		//remember  to use animation to make it bounce gently
		return (
			<div
				className={` w-[90%] md:h-[28rem] lg:h-[20rem] lg:w-[75%] mx-auto p-4 leading-6 ${
					theme == "light" ? "bg-LSC" : "bg-DSC"
				} flex flex-col justify-evenly text-white gap-4 text-[1rem] md:text-[1.4rem] lg:text-[1.2rem] rounded-lg font-monts font-medium text-left`}
			>
				<p className=''>You searched for :</p>
				<p
					className={` overflow-clip p-2 text-[1.2rem] md:text-[1.4rem] tracking-widest text-center`}
				>
					"{term}"
				</p>
				<p className='md:leading-8'>
					Unfortunately we don't have this term yet in our database, try searching for another term
				</p>
				<p className='md:leading-8'>
					<span className=' font-semibold'>Hint</span> : Try searching for the common name of the
					dish or others similiar to the dish.
				</p>
				<p className=''>Who knows what you might find 😏</p>
			</div>
		);
	};

	if (err) {
		return (
			<div
				className={`h-[80%] lg:w-[50%] lg:mx-auto flex justify-center items-center px-2 text-[1.2rem] lg:text-[1.4rem] font-semibold font-mono ${
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
	// if (results == null) {
	// 	return (
	// 		<div className=' border-black w-[95%] mx-auto mt-5 h-[82%] flex justify-center items-center '>
	// 			<img
	// 				src={theme == "light" ? infinityGreen : infinityBlack}
	// 				alt=''
	// 			/>
	// 		</div>
	// 	);
	// }

	if (results !== null) {
		return (
			<motion.div
				initial='initial'
				animate='animate'
				variants={parentVariants}
				className={`border-black w-[95%] mx-auto mt-5 flex justify-evenly flex-col gap-8 py-4 ${
					results.totalResults == 0 ? "" : "md:grid"
				} md:grid-cols-2 lg:grid-cols-4 `}
			>
				{results.results.length == 0 ? (
					<EmptyResComponent term={prevTerm} />
				) : (
					results.results.map((item) => (
						<SearchResultsCard
							key={item.id}
							heading={item.title}
							imgUrl={item.image}
							id={item.id}
						/>
					))
				)}
			</motion.div>
		);
	} else {
		return (
			<div
				className={`${
					theme == "light" ? "bg-LSC" : "bg-DSC"
				} text-white h-[30dvh] w-[90%] mx-auto flex justify-center items-center p-4 mt-8 rounded-lg text-[1.2rem]`}
			>
				<p className='text-start'>
					Type the name of the food you are interested in and hit enter, the app will search
					throught the database and render a list of cusines related to the term you wrote
				</p>
			</div>
		);
	}
};

export default SearchResults;
