import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const Footer = () => {
	let { theme } = useContext(ThemeContext);
	return (
		<div
			className={` py-8 flex justify-center font-mono font-semibold  tracking-wider ${
				theme == "light" ? "text-black" : "text-white"
			}`}
		>
			Powered by Spoonacular-API
		</div>
	);
};

export default Footer;
