import { IoIosArrowDropright } from "react-icons/io";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { motion } from "framer-motion";
const SearchResultsCard = ({ imgUrl, heading, id }) => {
	//values from contextAPI  store
	let { theme, toggleInstructionTab, setInstructionId } = useContext(ThemeContext);

	const childVariants = {
		initial: { opacity: 0, y: 999 },
		animate: { opacity: 1, y: 0 },
	};

	let springTransition = {
		type: "spring",
		stiffness: 100,
		damping: 5,
		mass: 1,
		velocity: 2,
		restDelta: 0.01,
		restSpeed: 0.01,
	};

	return (
		<motion.div
			variants={childVariants}
			className={`rounded-lg ${
				theme == "light" ? "bg-LSC" : "bg-DSC"
			} p-4 text-white flex flex-col gap-6 font-monts`}
		>
			<img
				className='block w-full object-cover rounded-md'
				src={imgUrl}
				alt={`${heading}img`}
			/>
			<p className='text-[1.2rem] md:text-[1.8rem] lg:text-[1.2rem] font-bold'>{heading}</p>
			<motion.button
				whileHover={{ scale: 1.05 }}
				transition={springTransition}
				onClick={() => {
					setInstructionId((p) => (p = id));
					toggleInstructionTab();
				}}
				className={`bg-LPC text-black w-[50%] p-2 md:p-4 mx-auto text-[1.2rem] md:text-[1.4rem] lg:text-[1.2rem] font-semibold rounded-md hover:cursor-pointer flex items-center justify-center gap-1`}
			>
				<p className='block'>Steps</p>
				<IoIosArrowDropright
					className={`block text-[2rem] font-bold  ${theme == "light" ? "text-LSC" : "text-DSC"}  `}
				/>
			</motion.button>
		</motion.div>
	);
};

export default SearchResultsCard;
