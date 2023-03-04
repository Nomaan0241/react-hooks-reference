import React, { useEffect, useState, useRef } from "react";

/**
 * useRef Hook
 * Accept One Argument as an initial Value.
 *
 * useRef is a React Hook that lets you reference a value that’s not needed for rendering.
 * useRef returns a ref object with a single current property initially set to the initial value you provided.
 *
 * On the next renders, useRef will return the same object. You can change its current property to store information and read it later.
 * This might remind you of state, but there is an important difference.
 * Changing a ref does not trigger a re-render.
 *
 * USAGE:
 *      You can store information between re-renders (unlike regular variables, which reset on every render).
 *      Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).
 *      The information is local to each copy of your component (unlike the variables outside, which are shared).
 *      You can also access the html elements using it.
 */

function UseRefHook() {
	const [name, setName] = useState("");
	const renderCount = useRef(0);
	//what if you want to count the how many times the componant is re-renderd
	// const [renderCout, setRenderCout] = useState(0);
	// useEffect(() => {
	// 	setRenderCout((prevRenderCount) => {
	// 		return +prevRenderCount + 1;
	// 	});
	// }, [renderCout]);
	// the above method won't work since every time you upadte renderCount , beacuse it is a state,
	// the componant will get re-rendered . This wil create infinite loop.

	// you can use useRef for this. since useRef Hook does not trigger re-render.
	useEffect(() => {
		renderCount.current = renderCount.current + 1;
	}, [name]);

	return (
		<div>
			<input
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<div> My Name is {name}</div>
			<div>THis compnant rendered {renderCount.current}</div>
			{/* <button>Focus</button> */}
			{/* <div> The componant rendered {renderCout}</div> */}
		</div>
	);
}

export default UseRefHook;
