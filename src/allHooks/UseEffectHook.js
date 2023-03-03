import React, { useState, useEffect } from "react";

/**
 * useEffectHook
 * Accepts two parameters
 * 1. setup         :   The function with your logic
 * 2. dependencies  :   Value in array, if that value changed then the function will get executed.
 */

const UseEffectHook = () => {
	const [resourceType, setResourceType] = useState("posts");
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
			.then((response) => response.json())
			.then((json) => setItems(json));

		// The return is used as cleanup function
		// This will we be usefull conditions like you need to perform cleanig up before unmounting the componant
		// for example :
		//              you can use when you are subscribed to an external api and before unmounting the componant
		//              you want to unsbscribe to that api and then unmount it.
		// The return will get called anytime the componant get unmounted
		return () => {
			setItems(["loading"]);
		};
	}, [resourceType]);

	console.log(resourceType);

	return (
		<div>
			<button
				onClick={() => {
					setResourceType("posts");
				}}
			>
				post
			</button>
			<button
				onClick={() => {
					setResourceType("users");
				}}
			>
				User
			</button>
			<button
				onClick={() => {
					setResourceType("comments");
				}}
			>
				Comments
			</button>
			<div>{resourceType}</div>
			<div>
				{items.map((item) => {
					return <p>{JSON.stringify(item)}</p>;
				})}
			</div>
		</div>
	);
};

export default UseEffectHook;
