import React, { useEffect, useState } from "react";

function UseCallBackList({ getItems }) {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(getItems());
		console.log("Updating Itmes");
	}, [getItems]);
	return (
		<div>
			{items.map((item) => (
				<div key={item}>{item}</div>
			))}
		</div>
	);
}

export default UseCallBackList;
