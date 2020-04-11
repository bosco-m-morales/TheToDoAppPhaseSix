import React from "react";

export function ToDoItem(props) {
	return (
		<div className="todo-item">
			<input type="checkbox" checked={props.todos.completed} />
			<p>{props.todos.text}</p>
		</div>
	);
}
