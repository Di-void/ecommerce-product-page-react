import React from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import userImage from "../images/image-avatar.png";
import Logo from "../images/logo.svg";
import { useGlobalContext } from "../context";

// # MAIN COMP..
const Navbar = () => {
	// # STATE VALUES
	const { openSidebar, amount, cart, toggleCart, isCartOpen } =
		useGlobalContext();
	// # FUNCTIONS AND SIDE EFFECTS
	// # RETs
	return (
		<Wrapper>
			<div className="logo-box">
				<FaBars className="bars-icon" onClick={openSidebar} />
				<img src={Logo} alt="Logo" className="logo" />
			</div>
			<div className="links-container">
				<ul className="nav-links">
					<li>
						<a href="#">Collections</a>
					</li>
					<li>
						<a href="#">Men</a>
					</li>
					<li>
						<a href="#">Women</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</div>
			<div className="user-box">
				<div className="cart-icon-container" onClick={toggleCart}>
					{cart.length > 0 && (
						<div className="quantity-info">
							<span className="quantity">{amount}</span>
						</div>
					)}

					<BsCart
						className={`${isCartOpen ? "cart-icon-active" : "cart-icon"}`}
					/>
				</div>
				<div className="user-img">
					<img src={userImage} alt="User" />
				</div>
			</div>
		</Wrapper>
	);
};

// # STYLED COMPONENT

const Wrapper = styled.nav`
	/* border: 1px solid black; */
	/* width: 100vw; */
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	box-shadow: 0px 21px 15px -3px rgba(0, 0, 0, 0.1);

	div {
		/* border: 1px solid black; */
		display: flex;
	}
	.logo-box {
		height: fit-content;
		padding: 0.2rem;

		.bars-icon {
			font-size: 20px;
			cursor: pointer;
		}
		img {
			margin-left: 20px;
			cursor: pointer;
		}
	}

	.links-container {
		display: none;
		a {
			color: var(--clr-neutral-3);
		}
	}

	.user-box {
		/* border: 1px solid black; */
		width: 20%;
		max-width: 7rem;
		display: flex;
		justify-content: space-between;

		.cart-icon-container {
			position: relative;
			width: 30px;
			/* border: 1px solid black; */

			.quantity-info {
				position: absolute;
				right: 0.4px;
				background-color: var(--clr-primary-1);
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0.1rem;
				width: 17px;
				height: 14px;
				border-radius: 50%;

				.quantity {
					color: var(--clr-primary-3);
					font-weight: 700;
					font-size: 0.75rem;
				}
			}
			.cart-icon {
				color: var(--clr-neutral-3);
				font-size: 25px;
				cursor: pointer;
				transition: all 0.2s linear;
			}
			.cart-icon:hover {
				color: black;
			}
		}

		div {
			width: fit-content;
			border: none;

			img {
				/* border: 1px solid black; */
				width: 28px;
				height: 28px;
				cursor: pointer;
			}
		}
	}
`;

export default Navbar;
