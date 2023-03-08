import React, { useState, createContext } from "react";

import UseStateHook from "./allHooks/UseStateHook";
import UseEffectHook from "./allHooks/UseEffectHook";
import UseMemoHook from "./allHooks/UseMemoHook";
import UseRefHook from "./allHooks/UseRefHook";
import UseContextHook from "./allHooks/UseContextHook";
import UseReducerHook from "./allHooks/UseReducerHook";
import TodosWithUseReducer from "./allHooks/useReducerAdvance/TodosWithUseReducer";
import UseCallBackHook from "./allHooks/UseCallBackHook";

//This is the context that can be used by any chile componant without extensive prop drilling.
import { ColorProvider } from "./allHooks/useContextAdvance/ChangeColor.js";
import TwoColorComponant from "./allHooks/useContextAdvance/TwoColorComponant.js";

export const ThemeContext = createContext();

function App() {
	const [darkTheme, setDarkTheme] = useState(true);

	//This function is moved to the compnant so that app.js wont clutter.
	// function toggleTheme() {
	// 	setDarkTheme((prevDarkTheme) => !prevDarkTheme);
	// }
	return (
		<div>
			{/* for Use Context Hooks */}
			{/* <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}> */}
			{/* <button onClick={toggleTheme}>Toggle Theme</button> */}
			{/* <UseContextHook /> */}
			{/* </ThemeContext.Provider> */}

			{/* <UseRefHook /> */}
			{/* <UseMemoHook /> */}
			{/* <UseEffectHook /> */}
			{/* <UseStateHook /> */}
			{/* <UseReducerHook /> */}
			{/* <TodosWithUseReducer /> */}
			<UseCallBackHook />

			{/* 
				This is advanced version where all code is extracted and placed at one place.
				this componant wraps all of the logic for handling our states, updating our state and pushing out
				those diffrent values to all of our children at one place.*/}
			{/* <ColorProvider>
				<TwoColorComponant />
			</ColorProvider> */}
		</div>
	);
}

export default App;
