import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { BiTrash } from "react-icons/bi";
import image1 from "../images/image-product-1-thumbnail.jpg";

// # MAIN COMP..
const Cart = () => {
	// # STATE VALUES
	const { cart } = useGlobalContext();
	// # FUNCTIONS AND SIDE EFFECTS
	// # RETs
	return (
		<Wrapper>
			<div className="section-center">
				<div className="section-header">
					<h3 className="section-title">Cart</h3>
				</div>

				<div className="section-body">
					<div className="cart-item">
						<img src={image1} alt="shoe image" />
						<div className="prod-info">
							<div className="prod-title">
								<p>fall limited edition...</p>
							</div>
							<div className="prod-price">
								$<span className="price">125.00</span> x 3{" "}
								<span className="item-price-total">$375.00</span>
							</div>
						</div>

						<button className="del-btn">
							<BiTrash />
						</button>
					</div>

					<div className="btn-container">
						<button className="checkout-btn">Checkout</button>
					</div>
					{/* <h3 className="info-text">Your cart is empty.</h3> */}
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.article`
	/* border: 1px solid black; */
	border-radius: 0.5em;
	/* width: 100vw; */
	width: 100%;
	max-width: 480px;
	height: 16rem;
	position: absolute;
	right: 0;
	z-index: 3;
	padding: 0.5rem;
	/* background-color: white; */

	.section-center {
		box-shadow: 7px 10px 100px 56px rgba(0, 0, 0, 0.1);
		background-color: var(--clr-primary-3);
		width: 100%;
		height: 100%;
		border-radius: 0.5em;
		padding: 0.5rem;

		.section-header {
			padding: 0.75rem;
			border-bottom: 1px solid var(--clr-neutral-4);
		}

		.section-body {
			position: relative;
			/* border: 1px solid red; */
			padding: 0.2rem;
			margin-top: 7px;
			min-height: 75%;
			.info-text {
				text-align: center;
				position: absolute;
				top: 40%;
				right: 28%;
				color: var(--clr-neutral-3);
				font-size: 1.1rem;
			}
			.cart-item {
				position: relative;
				/* border: 1px solid black; */
				padding: 0.2rem;
				display: flex;
				align-items: center;
				img {
					width: 70px;
					height: 70px;
					border-radius: 0.5em;
				}

				.prod-info {
					/* border: 1px solid black; */
					margin-left: 5px;

					.prod-title {
						p {
							color: var(--clr-neutral-3);
							font-weight: 300;
							text-transform: capitalize;
						}
					}

					.prod-price {
						margin-top: 3px;
						color: var(--clr-neutral-3);
						.item-price-total {
							color: var(--clr-primary-4);
							font-weight: 700;
						}
					}
				}
				.del-btn {
					position: absolute;
					right: 2%;
					color: var(--clr-neutral-3);
					font-size: 1.5rem;
					cursor: pointer;
					background: transparent;
					border: transparent;
					transition: var(--transition);
				}

				.del-btn:hover {
					color: black;
				}
			}

			.btn-container {
				margin-top: 15px;
				/* border: 1px solid black; */

				.checkout-btn {
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
				}
				.checkout-btn:hover {
					background-color: hsl(26, 99%, 63%);
				}
			}
		}
	}
`;

export default Cart;
