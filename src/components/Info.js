import React from "react";
import styled from "styled-components";
import { BiPlusMedical } from "react-icons/bi";
import { ImMinus } from "react-icons/im";
import { BsCart } from "react-icons/bs";
import { products } from "../data";
import { useGlobalContext } from "../context";

// # MAIN COMP..
const Info = () => {
	// # STATE VALUES
	const {
		itemName: name,
		itemDesc: desc,
		originalPrice,
		discount,
		discountedPrice,
	} = products[0];
	const { amount, ...rest } = useGlobalContext();
	// # FUNCTIONS AND SIDE EFFECTS
	// # RETs
	return (
		<Wrapper className="section">
			<div className="section-center">
				<h3 className="title">sneaker company</h3>
				<h1 className="prod-title">{name}</h1>

				<p className="prod-info">{desc}</p>

				<Buttons
					prodDets={{ originalPrice, discount, discountedPrice }}
					amount={amount}
					{...rest}
					name={name}
					price={discountedPrice}
				/>
			</div>
		</Wrapper>
	);
};

// # MAIN COMP.
const Buttons = ({
	prodDets: { originalPrice, discount, discountedPrice },
	amount,
	decreaseItemAmount,
	increaseItemAmount,
	addToCart,
	name,
	price,
}) => {
	// # STATE VALUES
	// # FUNCTIONS AND SIDE EFFECTS
	// # RETs
	return (
		<ButtonsWrapper>
			<header className="price-section">
				<div className="nums">
					<h1>
						$<span>{discountedPrice.toFixed(2)}</span>
					</h1>
					<h1 className="discount">{discount}%</h1>
				</div>

				<p>${originalPrice.toFixed(2)}</p>
			</header>

			<div className="buttons-container">
				<div className="btns">
					<button onClick={decreaseItemAmount}>
						<ImMinus />
					</button>

					<span>{amount}</span>

					<button onClick={increaseItemAmount}>
						<BiPlusMedical />
					</button>
				</div>

				<button
					className="add-to-cart"
					onClick={() => {
						addToCart(name, price);
					}}
				>
					<BsCart />
					<span>Add to cart</span>
				</button>
			</div>
		</ButtonsWrapper>
	);
};

// # STYLED COMPONENTS

const Wrapper = styled.article`
	/* border: 1px solid black; */
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
	@media screen and (min-width: 700px) {
		/* width: fit-content; */
		max-width: 400px;
		height: fit-content;
		margin-top: 1px;
		transform: scale(0.9);

		div {
			.title {
				font-size: 0.8rem;
			}
			.prod-title {
				font-size: 2rem;
				margin-top: 10px;
			}
			.prod-info {
				margin-top: 19px;
				font-size: 1rem;
			}
		}
		/* transform: scale(0.8); */
	}
	@media screen and (min-width: 1130px) {
	}
`;

const ButtonsWrapper = styled.div`
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
			/* vertical-align: baseline; */
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

	@media screen and (min-width: 800px) {
		.price-section {
			display: block;
			div {
				width: fit-content;
				/* border: 1px solid black; */

				.discount {
					margin-left: 10px;
				}
			}
			p {
				margin-top: 5px;
				position: unset;
			}
		}

		.buttons-container {
			margin-top: 20px;
			display: flex;
			justify-content: space-between;
			height: fit-content;
			width: 90%;
			/* border: 1px solid black; */

			.btns {
				margin-top: 0;
				margin-bottom: 0;
				margin-right: 5px;
				/* border: 1px solid black; */
				width: 40%;
			}

			.add-to-cart {
				margin-top: 0;
				margin-bottom: 0;
				width: 60%;
				height: fit-content;
			}
		}
	}
`;
export default Info;
