import React from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsCart, BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import userImage from "../images/image-avatar.png";
import Logo from "../images/logo.svg";

const Navbar = () => {
	return (
		<Wrapper>
			<div className="logo-box">
				<FaBars className="bars-icon" />
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
				<BsCart className="cart-icon" />
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
	width: 100vw;
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
		width: 20%;
		display: flex;
		justify-content: space-between;

		.cart-icon {
			font-size: 25px;
			cursor: pointer;
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
