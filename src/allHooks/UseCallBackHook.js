import React, { useState, useCallback } from "react";
import UseCallBackList from "./UseCallBackList";

/**
 * useCallback Hook
 * this hook lets you cache a function defination between the re-render.
 * Same as the useMemo Hook but this works with functionss.
 * Accpets Two Parameter :
 * 1. Function that you want to cache
 * 2. Dependecy : This function will be called again only if these dependacies change.
 *
 *
 * Big Difference Between use callback and useMemo :
 * useMemo()        : It takes function and it is going to return the "return value" of the that function.
 * useCallback()    : It takes function and it will return the function
 *
 *
 *
 * Here I created a simple example :
 *  where the getItem function will return the array according to the
 *  number state.
 *  that getItems functions is passed to the chile Componant and then called there.
 *  so evertime we change the state(number) then whole componant is re-render
 *  but it will re-render again if something else cause the re-render liks dark(state).
 *  To avoid un-necessory re-renders we can use the UseCallback Hook. it will cache the value of function
 *  and only if there are any changes in functions value then it will re-render else it will use the cached value.
 *
 *  You can pass function as props and it will update there if dependency changes here.
 */

const UseCallBackHook = () => {
	const [number, setNumber] = useState(1);
	const [dark, setDark] = useState(false);

	//if i used useMemo here then it wil only return the array from this function.
	//In most case we make some call to an api.
	const getItems = useCallback(() => {
		return [number, number + 1, number + 2];
	}, [number]);

	const theme = {
		backgroundColor: dark ? "#333" : "#FFF",
		color: dark ? "#fff" : "#333",
	};
	return (
		<div style={theme}>
			<input
				type="number"
				value={number}
				onChange={(e) => {
					setNumber(parseInt(e.target.value));
				}}
			/>

			<button onClick={() => setDark((prevDark) => !prevDark)}>
				Toggle Theme
			</button>
			<UseCallBackList getItems={getItems} />
		</div>
	);
};

export default UseCallBackHook;
