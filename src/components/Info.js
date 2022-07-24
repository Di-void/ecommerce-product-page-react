import React from "react";
import styled from "styled-components";
import { BiPlusMedical } from "react-icons/bi";
import { ImMinus } from "react-icons/im";
import { BsCart } from "react-icons/bs";

const Info = () => {
	return (
		<Wrapper className="section">
			<div className="section-center">
				<h3 className="title">sneaker company</h3>
				<h1 className="prod-title">fall limited edition sneakers</h1>

				<p className="prod-info">
					These low-profile sneakers are your perfect casual wear
					companion. Featuring a durable rubber outer sole, they'll
					withstand everything the weather can offer.
				</p>

				<Buttons />
			</div>
		</Wrapper>
	);
};

// # MAIN COMP.
const Buttons = () => {
	// # STATE VALUES
	// # FUNCTIONS AND SIDE EFFECTS
	// # RETs
	return (
		<ButtonsWrapper>
			<header className="price-section">
				<div className="nums">
					<h1>
						$<span>125.00</span>
					</h1>
					<h1 className="discount">50%</h1>
				</div>

				<p>$250.00</p>
			</header>

			<div className="btns">
				<button>
					<ImMinus />
				</button>

				<span>0</span>

				<button>
					<BiPlusMedical />
				</button>
			</div>

			<button className="add-to-cart">
				<BsCart />
				<span>Add to cart</span>
			</button>
		</ButtonsWrapper>
	);
};

// # STYLED COMPONENTS

const Wrapper = styled.article`
	div {
		.title {
			font-size: 0.9rem;
			color: var(--clr-primary-1);
			letter-spacing: 2px;
			text-transform: uppercase;
		}

		.prod-title {
			text-transform: capitalize;
			margin-top: 10px;
		}

		.prod-info {
			line-height: 1.4em;
			margin-top: 20px;
			color: var(--clr-neutral-3);
		}
	}
`;

const ButtonsWrapper = styled.div`
	/* border: 1px solid black; */
	padding: 1rem 0;

	.price-section {
		position: relative;
		/* border: 1px solid black; */
		display: flex;
		justify-content: space-between;

		div {
			/* border: 1px solid black; */
			text-align: center;
			display: flex;
			.discount {
				width: 60px;
				margin-left: 20px;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0.1rem;
				/* border: 1px solid black; */
				border-radius: 0.3em;
				background-color: var(--clr-primary-2);
				text-align: center;
				font-size: 1.4rem;
				color: var(--clr-primary-1);
			}
		}
		p {
			position: absolute;
			right: 0;
			bottom: 0;
			flex: none;
			color: var(--clr-neutral-3);
			margin-top: 0;
			font-weight: 700;
			text-decoration: line-through;
			vertical-align: baseline;
		}
	}

	.btns {
		background-color: var(--clr-neutral-5);
		opacity: 75%;
		padding: 1rem;
		margin-top: 30px;
		margin-bottom: 30px;
		/* border: 1px solid black; */
		border-radius: 0.5em;
		display: flex;
		justify-content: space-between;

		span {
			color: black;
			font-weight: 700;
			font-size: 1.2rem;
		}

		button {
			border: transparent;
			background: none;
			font-size: 1.2rem;
			font-weight: 700;
			cursor: pointer;
			color: var(--clr-primary-1);
		}
	}

	.add-to-cart {
		cursor: pointer;
		background-color: var(--clr-primary-1);
		border: transparent;
		padding: 1rem;
		border-radius: 0.5em;
		width: 100%;
		color: white;
		font-size: 1.2rem;
		font-weight: 700;
		transition: var(--transition);

		span {
			margin-left: 20px;
		}
	}

	.add-to-cart:hover {
		background-color: hsl(26, 99%, 63%);
	}
`;
export default Info;
