import React from "react";
import { useColors } from "./ChangeColor.js";

function TwoColorComponant() {
	const { color, toggleColor } = useColors();
	// const toggleTheme = useToggler();

	const themeStyle = {
		backgroundColor: color ? "#333" : "#CCC",
		color: color ? "#CCC" : "#333",
		padding: "2rem",
		margin: "2rem",
	};
	return (
		<div>
			<div style={themeStyle}>
				useContext() Hook advance
				<button onClick={toggleColor}>Toggle Theme</button>{" "}
			</div>
		</div>
	);
}

export default TwoColorComponant;
