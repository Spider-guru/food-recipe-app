// main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ThemeProvider from "./components/ThemeProvider.jsx"; // Import the ThemeProvider component
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	// Wrap your App component with the ThemeProvider
	<ThemeProvider>
		<App />
	</ThemeProvider>
);

