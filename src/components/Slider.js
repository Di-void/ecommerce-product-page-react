import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Images } from "./pics";

// # MAIN COMP..
const Slider = () => {
	// # STATE VALUES
	const [shoes, setShoes] = useState(Images);
	const [index, setIndex] = useState(0);
	// # FUNCTIONS AND SIDE EFFECTS
	const nextSlide = () => {
		setIndex(oldIndex => {
			let index = oldIndex + 1;
			if (index > shoes.length - 1) {
				index = 0;
			}
			return index;
		});
	};
	const prevSlide = () => {
		setIndex(oldIndex => {
			let index = oldIndex - 1;
			if (index < 0) {
				index = shoes.length - 1;
			}
			return index;
		});
	};
	// # RETs
	return (
		<Wrapper>
			{/* LIST */}
			{shoes.map((shoe, picIndex) => {
				const { id, image, alt } = shoe;
				return (
					<div key={id}>
						{index === picIndex && <img src={image} alt={alt} />}
					</div>
				);
			})}
			<button className="prev-btn" onClick={prevSlide}>
				<FiChevronLeft />
			</button>
			<button className="next-btn" onClick={nextSlide}>
				<FiChevronRight />
			</button>
			{/* <h1>Slider Component</h1> */}
		</Wrapper>
	);
};

// # STYLED COMPONENTS

const Wrapper = styled.section`
	position: relative;
	/* width: 100vw; */
	/* display: flex; */
	/* border: 1px solid black; */
	height: 350px;
	/* overflow: hidden; */

	div {
		/* border: 1px solid black; */
		width: 100%;
		height: 100%;
		position: absolute;
		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}

	button {
		background-color: var(--clr-primary-3);
		border: transparent;
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1rem;
		width: 27px;
		height: 27px;
		transform: scale(1.4);
		box-shadow: 7px 10px 100px 56px rgba(0, 0, 0, 0.1);
		transition: all 0.2s linear;
		/* z-index: 10; */
	}
	button:hover {
		background-color: #e6e5e5;
	}
	.prev-btn {
		position: absolute;
		top: 50%;
		left: 1rem;
	}
	.next-btn {
		position: absolute;
		top: 50%;
		right: 1rem;
	}
`;
export default Slider;
