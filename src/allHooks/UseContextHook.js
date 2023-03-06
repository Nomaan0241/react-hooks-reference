import React, { useContext } from "react";

//you need to import that context so that you can use it while calling useContext() Hook
import { ThemeContext } from "../App";

/**
 * useContext():
 * Hook that lets you read and subscribe to context form your componant.
 */

function UseContextHook() {
	/**
	 * - useContext() will return context value for the calling componponant,
	 *   (you will get themeContext after calling useContext).
	 * - It will get the value from the nearrest and closeste provider of that context.
	 * - If there is no susch provider, then the returned value will be the defualtValue you have passed to
	 *   createContext() for the context.
	 */
	const { darkTheme, setDarkTheme } = useContext(ThemeContext); // darkTheme contains the state darktheme sent from Provider.

	function toggleTheme() {
		setDarkTheme((prevDarkTheme) => !prevDarkTheme);
	}

	//themeStyle is dependent on the value of darkTheme, that comes from the provider.
	const themeStyle = {
		backgroundColor: darkTheme ? "#333" : "#CCC",
		color: darkTheme ? "#CCC" : "#333",
		padding: "2rem",
		margin: "2rem",
	};

	return (
		<div style={themeStyle}>
			useContext() Hook <button onClick={toggleTheme}>Toggle Theme</button>{" "}
		</div>
	);
}

export default UseContextHook;
