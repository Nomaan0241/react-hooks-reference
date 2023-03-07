import React, { useReducer } from "react";
/**
 *
 *   useReducer Hook :
 * - Accepts two parameters :
 *   1. A function that handle the state change.(normally called reducer function)
 *   2. A state, it can be single state or object.(Normally Object as this is used for more complex logics)
 * - Returns an Array :
 *   1. First Value is the state that can be used.
 *   2. Second is the function that can be called . so that change in state can happen.
 * - use Reducer hooks allowed you to handle more complex states
 * - Gives you action to perform more specific logic to you states.
 */

//instead of sending simple string to switch case and dispatch function.
// if any of them have a typo it wont work.
// Using a object will be effienct .
const ACTION = {
	INCREMENT: "increment",
	DECREMENT: "decrement",
};

//reducer function is the only function that's capable of making changes in state.
// accept two parameters.
// 1. state
// 2. action : action is object that have a value on which different changes can be made two the state.
function reducer(state, action) {
	switch (action.type) {
		case ACTION.INCREMENT:
			// case "increment":
			return { count: state.count + 1 };
		case ACTION.DECREMENT:
			// case "decrement":
			return { count: state.count - 1 };
		default:
			return state;
	}
}

function UseReducerHook() {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	function decrement() {
		// dispatch function will call the reducer with the action of "decrement"
		// to make any changes to the state we need to call the same dispatch function
		// but with the different action type.
		return dispatch({ type: ACTION.DECREMENT });
		// return dispatch({ type: "decrement" });
	}

	function increment() {
		return dispatch({ type: ACTION.INCREMENT });
		// return dispatch({ type: "increment" });
	}

	return (
		<div>
			<button onClick={decrement}>-</button>
			{state.count}
			<button onClick={increment}>+</button>
		</div>
	);
}

export default UseReducerHook;
