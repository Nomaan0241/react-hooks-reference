import React, { useState, useMemo } from "react";

/**
 * Use Memo Hooks:
 * Accpet Two Arguments;
 * 1. Calculation Function : hat takes no arguments, like () =>, and returns what you wanted to calculate.
 * 2. List of dependencies : If any value from this list of array changes then only use memo will run.
 *
 *
 * By default, React will re-run the entire body of your component every time that it re-renders.
 * this isn’t a problem because most calculations are very fast. However, if you’re filtering or transforming a large array,
 * or doing some expensive computation, you might want to skip doing it again if data hasn’t changed.
 *
 * Basically useMemo will cache the last caculated value and gave that.
 *
 * NOTE: You should only rely on useMemo as a performance optimization.
 */

const UseMemoHook = () => {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);

	//this function take too much time So we need to optimise it by using useMemo
	// const doubleNumber = slowfunction(number); <-- normal call
	const doubleNumber = useMemo(() => {
		return slowfunction(number);
	}, [number]);
	// after using useMemo other code will be called everytime the componant is re-rendered.
	// but slowfunctio(number) will only be called if the number state is changed

	const themeStyles = {
		backgroundColor: dark ? "black" : "white",
		color: dark ? "white" : "black",
	};

	return (
		<div>
			<input
				type="number"
				value={number}
				onChange={(e) => setNumber(parseInt(e.target.value))}
			/>
			<button onClick={() => setDark((prevDark) => !prevDark)}>
				Change Theme
			</button>
			<div style={themeStyles}>{doubleNumber} </div>
		</div>
	);
};

function slowfunction(num) {
	console.log("Calling a very slow function");
	for (let i = 0; i <= 1000000000; i++) {}
	for (let i = 0; i <= 1000000000; i++) {}
	return num * 2;
}

export default UseMemoHook;
