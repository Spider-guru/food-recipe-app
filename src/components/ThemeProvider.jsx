// ThemeProvider.jsx

import React, { createContext, useState } from "react";

// Create a new context
export const ThemeContext = createContext();

// ThemeProvider component
const ThemeProvider = ({ children }) => {
	// State to manage the current theme
	const [theme, setTheme] = useState("light");

	// Function to toggle the theme
	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	//object to dictate framer motions effect on components
	let springy = {
		type: "spring",
		stiffness: 500,
		damping: 30,
	};

	//state to store results fetched from api
	let [results, setResults] = useState(null);

	//state  to store prev searched term
	let [prevTerm, setPrevTerm] = useState("");

	//state to store loading state
	let [loading, setLoading] = useState(true);

	//state to store error
	let [err, setErr] = useState(null);

	//state to toggle instruction tab visibility
	let [isInstrucTabOpen, setIsIntrucTabOPen] = useState(false);

	//function to toggle instruction tab state
	let toggleInstructionTab = () => {
		setIsIntrucTabOPen((p) => (p = !p));
	};

	//state to store id needed to fetch instruction	NB:delete later not needed
	let [instructionId, setInstructionId] = useState(null);

	// Context value containing theme state and toggle function
	const contextValue = {
		theme,
		toggleTheme,
		springy,
		results,
		setResults,
		loading,
		setLoading,
		setErr,
		err,
		isInstrucTabOpen,
		setIsIntrucTabOPen,
		toggleInstructionTab,
		instructionId,
		setInstructionId,
		prevTerm,
		setPrevTerm,
	};

	return (
		// Provide the context value to the children
		<ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
	);
};

export default ThemeProvider;
