import React from "react";
import { ACTION } from "./TodosWithUseReducer";

function Todo({ todo, dispatch }) {
	return (
		<div>
			<span style={{ color: todo.complete ? "#00FF00" : "#FF0000" }}>
				{todo.name}
			</span>
			<button
				onClick={() =>
					dispatch({ type: ACTION.TOGGLE_TODO, payload: { id: todo.id } })
				}
			>
				Toogle
			</button>
			<button
				onClick={() =>
					dispatch({ type: ACTION.DELETE_TODO, payload: { id: todo.id } })
				}
			>
				Delete
			</button>
		</div>
	);
}

export default Todo;
