import React from "react";
import { useState, useEffect, useContext, useRef } from "react";

const AppContext = React.createContext();

// # MAIN COMP..
const AppProvider = ({ children }) => {
	// # STATE VALUES
	// # FUNCTIONS AND SIDE EFFECTS
	// #  RETs
	return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

// # custom hook
const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
