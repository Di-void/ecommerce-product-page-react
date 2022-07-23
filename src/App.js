import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import { useGlobalContext } from "./context";

// # MAIN COMP..
const App = () => {
	// # STATE VALUES
	// # FUNCTIONS AND SIDE EFFECTS
	// # RETs
	return (
		<main>
			<Navbar />
			<Slider />
			{/* <Sidebar /> */}
		</main>
	);
};

export default App;
