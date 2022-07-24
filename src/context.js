import React from "react";
import { useState, useEffect, useContext, useRef } from "react";

const AppContext = React.createContext();

// # MAIN COMP..
const AppProvider = ({ children }) => {
	// # STATE VALUES
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	// # FUNCTIONS AND SIDE EFFECTS
	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};
	// #  RETs
	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				openSidebar,
				closeSidebar,
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
