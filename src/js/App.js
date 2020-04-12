import React, { Component } from "react";
import { ToDoItem } from "./component/ToDoItem";
import { toDosData } from "./data/ToDosData";
/*
export function App() {
	const todoComponents = toDosData.map(todos => (
		<ToDoItem key={todos.id} todos={todos} />
	));
	return <div className="todo-list">{todoComponents}</div>;
}
*/

export class App extends Component {
	constructor() {
		super();
		thi.state = {
			items: toDosData
		};
	}
	render() {
		const todoComponents = this.state.items.map(todos => (
			<ToDoItem key={todos.id} todos={todos} />
		));
		return <div className="todo-list">{todoComponents}</div>;
	}
}
