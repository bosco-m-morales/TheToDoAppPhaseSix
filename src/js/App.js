import React from "react";
import { ToDoItem } from "./component/ToDoItem";
import { toDosData } from "./data/ToDosData";

export function App() {
	const todoComponents = toDosData.map(todos => (
		<ToDoItem key={todos.id} todos={todos} />
	));
	return <div className="todo-list">{todoComponents}</div>;
}
