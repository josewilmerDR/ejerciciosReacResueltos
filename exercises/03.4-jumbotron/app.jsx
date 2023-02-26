import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
	//here you have to return expected html using the properties being passed to the component
	return (
		<div className="jumbotron m-5">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<a className="btn btn-primary btn-lg" href={props.buttonURL} role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};

Jumbotron.propTypes = {
	//proptypes here
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
};

ReactDOM.render(
	<Jumbotron
		title="Welcome to react"
		description="React is the most popular rendering library in the world"
		buttonLabel="Go to the official website"
		buttonURL="https://reactjs.org/"
	/>,

	document.querySelector("#myDiv")
);

{
	/* <div className="jumbotron m-5">
	<h1 className="display-4"> Welcome to react</h1>
	<p className="lead"> React is the most popular rendering library in the world</p>
	<a className="btn btn-primary btn-lg" href="https://reactjs.org/" role="button">
		Go to the official website
	</a>
</div>; */
}
