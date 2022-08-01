import { React, useState } from "react";
import styled from "styled-components";
import { Images } from "./pics";
import { FaTimes } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Thumbs } from "./pics";
import { useGlobalContext } from "../context";

// # MAIN COMP..
const BigSlider = () => {
	// # STATE VALUES
	// eslint-disable-next-line
	const [shoes, setShoes] = useState(Images);
	const [index, setIndex] = useState(0);
	const { isBigSliderOpen, closeBackdrop } = useGlobalContext();
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
			<div className={`bigslider-overlay ${isBigSliderOpen && "active"}`}>
				<div className="bigslider">
					<div className="header">
						<button type="button" onClick={closeBackdrop}>
							<FaTimes />
						</button>
					</div>

					<div className="section-center">
						<div className="slider-container">
							{shoes.map((shoe, picIndex) => {
								const { id, image, alt } = shoe;
								return (
									<div key={id} className="slidepic-container">
										{index === picIndex && (
											<img src={image} alt={alt} />
										)}
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
					</div>

					<div className="section-footer">
						<div className="thumbnail-container">
							{/* LIST */}
							{Thumbs.map((item, thumbIndex) => {
								const { id, image, alt } = item;
								return (
									<div
										key={id}
										onClick={() => handleSwitch(thumbIndex)}
										className={`${
											thumbIndex === index && "divactive"
										}`}
									>
										<img
											src={image}
											alt={alt}
											className="thumb-image"
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

// # STYLED COMPONENTS
const Wrapper = styled.section`
	.bigslider-overlay {
		visibility: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));

		.bigslider {
			/* border: 1px solid white; */

			width: fit-content;
			height: fit-content;
			padding: 0.5rem;

			.header {
				/* border: 1px solid white; */
				display: flex;
				justify-content: flex-end;

				button {
					background: transparent;
					font-size: 1.5rem;
					color: white;
					border: transparent;
					cursor: pointer;
				}

				button:hover {
					color: var(--clr-primary-1);
				}
			}
			.section-center {
				margin-top: 10px;
				position: relative;
				width: 350px;
				height: 70%;
				/* border: 1px solid white; */

				.slider-container {
					width: 100%;
					height: 100%;
				}
				.slidepic-container {
					width: 100%;
					height: 80%;
					img {
						border-radius: 0.5rem;
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
			}

			.section-footer {
				/* border: 1px solid white; */
				padding: 0 2rem;
				margin-top: 20px;
				.thumbnail-container {
					padding: 0.2rem 0;
					/* border: 1px solid black; */
					display: flex;
					justify-content: space-between;

					div {
						background-color: white;
						width: 50px;
						height: 50px;
						cursor: pointer;
						/* border: 1px solid black; */
						border-radius: 0.5em;
						overflow: hidden;
						display: flex;
						justify-content: center;
						align-items: center;

						img {
							border-radius: 0.4em;
							width: 80px;
							height: 60px;
						}
						img:hover {
							opacity: 0.7;
						}
					}
				}
			}
		}
	}
	.active {
		visibility: visible;
	}
`;
export default BigSlider;
