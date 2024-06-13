import Header from "./components/Header";
import { useContext } from "react";
import { ThemeContext } from "./components/ThemeProvider";
import Searchbar from "./components/Searchbar";
import SearchResults from "./components/SearchResults";
import InstructionTab from "./components/InstructionTab";

function App() {
	let { theme, isInstrucTabOpen, instructionId } = useContext(ThemeContext);

	return (
		<div className={`${theme == "light" ? "bg-LPC" : "bg-DPC"} h-dvh overflow-auto relative `}>
			<Header />
			<Searchbar />
			<SearchResults />
			{isInstrucTabOpen && <InstructionTab foodId={instructionId} />}
		</div>
	);
}

export default App;

