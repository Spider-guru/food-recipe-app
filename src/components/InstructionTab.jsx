import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { FiArrowLeft } from "react-icons/fi";
import loaderLight from "../assets/InfinityGreen.svg";
import loaderDark from "../assets/InfinityBlue.svg";
import { useEffect } from "react";
import { fetchInstruction } from "../utils/FetchData";
import { useState } from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";

const InstructionTab = ({ foodId }) => {
	//variables(states)
	let { theme, toggleInstructionTab } = useContext(ThemeContext);
	let [instrucErr, setInstrucErr] = useState(false);
	let [instruction, setInstruction] = useState(null);
	let [isInstrucLoading, setIsInstrucLoading] = useState(true);
	let springTransition = {
		type: "spring",
		stiffness: 100,
		damping: 10,
		mass: 1,
		velocity: 2,
		restDelta: 0.01,
		restSpeed: 0.01,
	};
	//mini-components
	let Ingredients = ({ img, name, amount }) => {
		return (
			<div
				className={`flex flex-col items-center p-2 ${
					theme == "light" ? "bg-LSC text-white" : "bg-DSC"
				} rounded-lg gap-2 font-medium text-[1.2rem] `}
			>
				<p className=' w-full h-[8rem] '>
					<img
						className='object-fill w-full h-full'
						src={`https://spoonacular.com/cdn/ingredients_100x100/${img}`}
						alt=''
					/>
				</p>
				<p className=' w-full '>Name: {name}</p>
				<p className=' w-full'>Amount: {amount}</p>
			</div>
		);
	};

	let Steps = ({ stepNO, step }) => {
		return (
			<div
				className={`${
					theme == "light" ? "bg-LSC text-white" : "bg-DSC text-white"
				} p-4 flex flex-col justify-evenly gap-2 rounded-md`}
			>
				<p className={`text-center font-medium text-[1.25rem] tracking-widest`}>Step {stepNO}</p>
				<p className={`italic font-medium text-center text-[1.1rem]`}>{step}</p>
			</div>
		);
	};

	let LoadingPage = () => {
		return (
			<div className=' flex flex-col justify-center items-center h-full '>
				<img
					className='w-[90%] mx-auto'
					src={theme == "light" ? loaderLight : loaderDark}
					alt=''
				/>
			</div>
		);
	};

	// useEffects to carry out operation on component mount
	useEffect(() => {
		fetchInstruction(foodId, setInstruction, setInstrucErr);
	}, []);

	useEffect(() => {
		if (instruction !== null) {
			setIsInstrucLoading((p) => (p = false));
			console.log(instruction);
		}
	}, [instruction]);

	if (instrucErr) {
		return (
			<div
				className={`h-full flex items-center justify-center text-[1.2rem] ${
					theme == "light" ? "text-black" : "text-white"
				}`}
			>
				<p>ERROR</p>
			</div>
		);
	}
	return (
		<motion.div
			initial={{ opacity: 0, x: -999 }}
			animate={{ opacity: 1, x: 0 }}
			transition={springTransition}
			exit={{ opacity: 0, x: -999 }}
			className={` h-[94dvh] lg:h-[92dvh] bottom-[0px] w-full fixed overflow-auto scroll-smooth ${
				theme == "light" ? "bg-LPC text-black" : "bg-DPC text-white"
			} font-monts`}
		>
			<div
				className={`flex lg:fixed lg:z-10 lg:w-full ${
					theme == "light" ? "bg-LPC" : "bg-DPC"
				}  items-center justify-start p-1 gap-8 text-[1.4rem] font-semibold h-[3.8rem] border-b-2 ${
					theme == "light" ? "border-LSC text-black" : "border-DSC text-white"
				}`}
			>
				<FiArrowLeft
					onClick={() => {
						toggleInstructionTab();
						setInstruction((p) => (p = null));
					}}
					className={`w-[15%] h-full p-2 rounded-md ${
						theme == "light" ? "hover:bg-LSC" : "hover:bg-DSC"
					}`}
				/>
				<p>Instructions</p>
			</div>

			{isInstrucLoading || instruction == null ? (
				<LoadingPage />
			) : (
				<div className=' flex flex-col pt-8 lg:pt-[5rem] w-[95%] mx-auto '>
					<div>
						<img
							className='object-cover aspect-square w-[60%] mx-auto rounded-lg lg:h-[22rem] lg:w-[22rem] '
							src={instruction.image}
							alt=''
						/>
					</div>

					<div className={` my-8 text-[1.2rem] font-bold text-center font-popins tracking-wider `}>
						{instruction.title}
					</div>

					<div className=' '>
						<p
							className={`font-semibold py-2 text-center border-b ${
								theme == "light" ? "border-LSC" : "border-DSC"
							} text-[1.4rem] tracking-widest`}
						>
							Servings
						</p>
						<p className='text-center py-4 text-[1.2rem] font-medium'>
							{instruction.servings > 1 ? `${instruction.servings} people` : "instruction.servings"}
						</p>
					</div>

					<div className=' '>
						<p
							className={`font-semibold py-2 text-center border-b text-[1.4rem] tracking-widest ${
								theme == "light" ? "border-LSC" : "border-DSC"
							}`}
						>
							Time Taken
						</p>
						<p className='text-center py-4 text-[1.2rem] font-medium'>
							{instruction.readyInMinutes} min
						</p>
					</div>

					<div className='flex-flex-col py-4'>
						<p
							className={`font-semibold py-2 text-center border-b text-[1.4rem] tracking-widest ${
								theme == "light" ? "border-LSC" : "border-DSC"
							} `}
						>
							Ingredients
						</p>
						<div className={` grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 mt-8 `}>
							{instruction.extendedIngredients.map((item) => (
								<Ingredients
									amount={item.original}
									img={item.image}
									name={item.name}
									key={Math.random()*Math.random()}
								/>
							))}
						</div>
					</div>

					<div className={``}>
						<p className={`text-center font-semibold text-[1.4rem] mt-8 border-b border-LSC`}>
							Steps
						</p>
						<div className={`flex py-4 flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-4 `}>
							{instruction.analyzedInstructions[0].steps.map((p) => (
								<Steps
									step={p.step}
									stepNO={p.number}
									key={p.number}
								/>
							))}
						</div>
					</div>

					<Footer />
				</div>
			)}
		</motion.div>
	);
};

export default InstructionTab;
