import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Info from "./components/Info";
import Sidebar from "./components/Sidebar";
import Cart from "./components/Cart";
import BigSlider from "./components/BigSlider";

// # MAIN COMP..
const App = () => {
	// # STATE VALUES
	// # FUNCTIONS AND SIDE EFFECTS
	// # RETs
	return (
		<main>
			<Navbar />
			<Cart />
			<Wrapper>
				<Slider />
				<Info />
			</Wrapper>
			<Sidebar />
			<BigSlider />
		</main>
	);
};

const Wrapper = styled.div`
	@media screen and (min-width: 700px) {
		position: relative;
		margin: 0 auto;
		/* border: 1px solid black; */
		width: fit-content;
		padding: 0.75rem;
		margin-top: 40px;
		display: grid;
		grid-column-gap: 1em;
		grid-template-columns: 1fr 1fr;
	}
`;
export default App;
