import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Info from "./components/Info";
import Sidebar from "./components/Sidebar";
import Cart from "./components/Cart";
import { useGlobalContext } from "./context";

// # MAIN COMP..
const App = () => {
	// # STATE VALUES
	// # FUNCTIONS AND SIDE EFFECTS
	// # RETs
	return (
		<main>
			<Navbar />
			<Cart />
			<Slider />
			<Info />
			<Sidebar />
		</main>
	);
};

export default App;
