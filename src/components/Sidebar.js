import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { links } from "./links";
import { useGlobalContext } from "../context";

// # MAIN COMP..
const Sidebar = () => {
	// # STATE VALUES
	const { closeSidebar, isSidebarOpen } = useGlobalContext();
	// # FUNCTIONS AND SIDE EFFECTS
	// # RETs
	return (
		<Wrapper>
			<div className={`sidebar-overlay ${isSidebarOpen && "active"}`}>
				<div className={`sidebar ${isSidebarOpen && "showSidebar"}`}>
					<button
						className="close-icon"
						onClick={closeSidebar}
						title="close sidebar"
						type="button"
					>
						<FaTimes />
					</button>
					<ul>
						{links.map(link => {
							return (
								<li key={link.id} className="sidebar-link">
									<a href="#">{link.link}</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</Wrapper>
	);
};

// # STYLED COMPONENTS
const Wrapper = styled.aside`
	.sidebar-overlay {
		visibility: hidden;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
		transition: var(--transition);
		z-index: 4;

		.sidebar {
			padding: 1rem;
			background: var(--clr-primary-3);
			width: 65%;
			height: 100%;
			transform: translateX(-100%);
			transition: var(--transition);

			.close-icon {
				font-size: 1.5rem;
				cursor: pointer;
				margin-bottom: 25px;
				background: none;
				border: transparent;
			}

			.sidebar-link {
				margin-bottom: 30px;
				font-weight: 700;
				font-size: 1.3rem;

				a {
					color: black;
					transition: var(--transition);
				}
				a:hover {
					color: var(--clr-primary-1);
				}
			}
		}
		.showSidebar {
			transform: translateX(0);
		}
	}
	.active {
		visibility: visible;
	}
`;
export default Sidebar;
