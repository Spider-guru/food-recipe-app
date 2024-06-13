import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { IoFastFoodSharp } from "react-icons/io5";

const Header = () => {
	let { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<div
			className={` ${
				theme == "light" ? "bg-LSC" : "bg-DSC"
			} h-[6dvh] flex justify-center items-center gap-6 text-[1.4rem] font-bold font-popins tracking-widest text-white fixed w-full z-10 `}
		>
			<p>
				<IoFastFoodSharp />
			</p>
			<p onClick={toggleTheme}>Food Recipe App</p>
		</div>
	);
};

export default Header;
