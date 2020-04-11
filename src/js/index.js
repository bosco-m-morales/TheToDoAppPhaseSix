//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//render your react application

class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>It's Bosco, Bitch!</h1>
			</div>
		);
	}
}

ReactDOM.render(<Home />, document.querySelector("#app"));
