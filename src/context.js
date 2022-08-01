import React from "react";
import { useState, useEffect, useContext } from "react";
import { products } from "./data";

const AppContext = React.createContext();

// # MAIN COMP..
const AppProvider = ({ children }) => {
	// # STATE VALUES
	// eslint-disable-next-line
	const [items, setItems] = useState(products);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isBigSliderOpen, setIsBigSliderOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cart, setCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const { inStock } = items[0];
	// eslint-disable-next-line
	const [itemPrice, setItemPrice] = useState(products[0].discountedPrice);
	const [amount, setAmount] = useState(0);
	// # FUNCTIONS AND SIDE EFFECTS
	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};
	const openBackdrop = () => {
		setIsBigSliderOpen(true);
	};
	const closeBackdrop = () => {
		setIsBigSliderOpen(false);
	};

	const increaseItemAmount = () => {
		setAmount(oldAmount => {
			if (oldAmount < inStock) {
				return oldAmount + 1;
			}
			return oldAmount;
		});
	};
	const decreaseItemAmount = () => {
		setAmount(oldAmount => {
			let newAmount = oldAmount - 1;
			if (newAmount > 0) {
				return newAmount;
			} else {
				deleteItemFromCart();
			}
		});
	};

	const calculateTotal = amount => {
		let ttlPrice = itemPrice * amount;
		ttlPrice = ttlPrice.toFixed(2);
		setTotalPrice(ttlPrice);
	};

	useEffect(() => {
		calculateTotal(amount);
		// eslint-disable-next-line
	}, [amount]);

	const addToCart = (name, price) => {
		if (amount > 0) {
			let total = totalPrice;
			let newCartItem = {
				id: 1,
				name: name,
				price: price,
				total,
			};
			let isInCart = cart.find(cartItem => cartItem.id === newCartItem.id);
			if (!isInCart) {
				setCart(oldCart => {
					let newCart = [...oldCart, newCartItem];
					return newCart;
				});
			}
			setIsCartOpen(true);
		}
	};

	const deleteItemFromCart = () => {
		setCart([]);
		// hardcoded this portion cause there is only one item in the cart
		setAmount(0);
	};
	const toggleCart = () => {
		setIsCartOpen(!isCartOpen);
	};
	// #  RETs
	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				openSidebar,
				closeSidebar,
				isBigSliderOpen,
				openBackdrop,
				closeBackdrop,
				cart,
				amount,
				isCartOpen,
				toggleCart,
				increaseItemAmount,
				decreaseItemAmount,
				addToCart,
				totalPrice,
				deleteItemFromCart,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

// # custom hook
const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
