import Header from "./components/Header";
import { useContext } from "react";
import { ThemeContext } from "./components/ThemeProvider";
import Searchbar from "./components/Searchbar";
import SearchResults from "./components/SearchResults";
import InstructionTab from "./components/InstructionTab";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

function App() {
	let { theme, isInstrucTabOpen, instructionId } = useContext(ThemeContext);

	return (
		<div
			className={`${
				theme == "light" ? "bg-LPC" : "bg-DPC"
			} h-dvh overflow-auto relative scroll-smooth `}
		>
			<Header />
			<Searchbar />
			<SearchResults />
			<AnimatePresence>
				{isInstrucTabOpen && <InstructionTab foodId={instructionId} />}
			</AnimatePresence>
			<Footer />
		</div>
	);
}

export default App;
