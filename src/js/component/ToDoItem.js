import React from "react";
import { PropTypes } from "prop-types";

export function ToDoItem(props) {
	return (
		<div className="todo-item">
			<input type="checkbox" checked={props.todos.completed} />
			<p>{props.todos.text}</p>
		</div>
	);
}

ToDoItem.propTypes = {
	text: PropTypes.string,
	completed: PropTypes.string
};
