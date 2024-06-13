import { IoIosArrowDropright } from "react-icons/io";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
const SearchResultsCard = ({ imgUrl, heading, id }) => {
	let { theme, toggleInstructionTab, setInstructionId } = useContext(ThemeContext);

	return (
		<div
			className={`rounded-lg ${
				theme == "light" ? "bg-LSC" : "bg-DSC"
			} p-4 text-white flex flex-col gap-6 font-monts`}
		>
			<img
				className='block w-full object-cover rounded-md'
				src={imgUrl}
				alt={`${heading}img`}
			/>
			<p className='text-[1.4rem] font-bold'>{heading}</p>
			<button
				className={`bg-LPC text-black w-[50%] p-2 mx-auto text-[1.2rem] font-semibold rounded-md hover:cursor-pointer flex items-center justify-center gap-1`}
			>
				<p
					onClick={() => {
						setInstructionId((p) => (p = id));
						toggleInstructionTab();
					}}
					className='block'
				>
					Steps
				</p>
				<IoIosArrowDropright
					className={`block text-[2rem] font-bold  ${theme == "light" ? "text-LSC" : "text-DSC"}  `}
				/>
			</button>
		</div>
	);
};

export default SearchResultsCard;
