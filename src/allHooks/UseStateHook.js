import React, { useState } from "react";

/**
 * useState()
 * Accepts the default value for the state.
 * Returns array that contain 1]  state   2]  function to update the state
 */

const UseStateHook = () => {
	/**
	 * Two ways to use useState()
	 */
	const arr = useState(3); //Not Efficient way to use this function
	const [count, setCount] = useState(4); // array is destructured here so you can use it seperatly.

	/**
	 * Two Ways to pass value to the useState()
	 */
	const [percentage, setPercentage] = useState(95);
	//In this direct value is passed to the useState() function.
	//The state will get called every time the functio is called.
	const [avarage, setAvarage] = useState(() => {
		// this function will be called only once
		return count + percentage;
	});

	/**
	 * Two ways to update the state .
	 */
	// 1. by providing the current count value to the setCount()
	function decrementByOne() {
		setCount(count - 1); //will work fine here
	}
	function incrementByOne() {
		setCount(count + 1);
		setCount(count + 1);
		// It won't increment it by two beacause the value of count is set at the time of render.
		// So the second setCount() will get the same value as the first call
	}
	// 2. by using priouse value of state to update the state
	function decrementByOneOptimalWay() {
		setCount((prevCount) => prevCount - 1);
	}
	function incrementByOneOptimalWay() {
		setCount((prevCount) => prevCount + 1);
	}

	/**
	 * How to use Object as a state
	 */
	const [obj, setObj] = useState({
		name: "amit",
		marks: 98,
	});
	const { name, marks } = obj;
	//To update this objecet
	function changeUserName() {
		setObj((prevObj) => {
			return { ...prevObj, name: "shubam" };
		});
		//here the object is copied and only name is updated
	}
	return (
		<div>
			<button onClick={decrementByOneOptimalWay}>-</button>
			<br></br>
			Count:{count} <br></br>
			Avarage:{avarage} <br></br>
			Percentage:{percentage} <br></br>
			<button onClick={incrementByOneOptimalWay}>+</button>
		</div>
	);
};

export default UseStateHook;
