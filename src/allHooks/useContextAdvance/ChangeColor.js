import React, { useContext, useState, createContext } from "react";

/**
 * By extracting all logic in this single file. so that you can call from any whare in the code and use this the context
 */
const colorContext = createContext();

export function useColors() {
	return useContext(colorContext);
}

export function ColorProvider({ children }) {
	const [color, setColor] = useState(true);

	function toggleColor() {
		setColor((prevColor) => !prevColor);
	}

	return (
		<colorContext.Provider value={{ color, toggleColor }}>
			{children}
		</colorContext.Provider>
	);
}
