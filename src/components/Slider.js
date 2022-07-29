import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Images } from "./pics";
import { Thumbs } from "./pics";

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

	const handleSwitch = ind => {
		setIndex(ind);
	};

	// # RETs
	return (
		<Wrapper>
			{/* LIST */}
			<div className="slider-container">
				{shoes.map((shoe, picIndex) => {
					const { id, image, alt } = shoe;
					return (
						<div key={id} className="slidepic-container">
							{index === picIndex && <img src={image} alt={alt} />}
						</div>
					);
				})}
			</div>

			<div className="thumbnail-container">
				{/* LIST */}
				{Thumbs.map((item, thumbIndex) => {
					const { id, image, alt } = item;
					return (
						<div
							key={id}
							data-id={thumbIndex}
							onClick={() => handleSwitch(thumbIndex)}
							className={`${thumbIndex === index && "divactive"}`}
						>
							<img src={image} alt={alt} className="thumb-image" />
						</div>
					);
				})}
			</div>
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

	.slider-container {
		width: 100%;
		height: 100%;
	}
	.slidepic-container {
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

	.thumbnail-container {
		display: none;
	}
	/* .thumb-image {
		border: 2px solid var(--clr-primary-1);
		border-radius: 0.4em;
		width: 60px;
		height: 60px;
	} */

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
	@media screen and (min-width: 700px) {
		width: fit-content;
		height: fit-content;
		.slider-container {
			width: 350px;
			height: 350px;
		}
		.slidepic-container {
			height: 80%;
			/* padding: 0.2em; */
			img {
				border-radius: 0.5em;
				object-fit: unset;
			}
		}
		.thumbnail-container {
			padding: 0.2rem 0;
			/* border: 1px solid black; */
			display: flex;
			justify-content: space-between;

			div {
				width: 60px;
				height: 60px;
				cursor: pointer;
				/* border: 1px solid black; */
				border-radius: 0.5em;
				overflow: hidden;
				display: flex;
				justify-content: center;
				align-items: center;
				/* border: 2px solid var(--clr-primary-1); */

				img {
					border-radius: 0.4em;
					/* transform: scale(1); */
					width: 80px;
					height: 60px;
					/* object-fit: contain; */
				}
				img:hover {
					opacity: 0.5;
				}
			}
		}
		.prev-btn {
			visibility: hidden;
		}
		.next-btn {
			visibility: hidden;
		}
	}
	@media screen and (min-width: 1170px) {
	}
`;
export default Slider;
