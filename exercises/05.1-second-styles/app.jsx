import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const buttonStyles = {
	//write button styles here
	background: "yellow",
	border: "none",
	color: "black",
};

const badgeStyles = {
	//write the span styles here
	background: "red",
	borderRadius: "50%",
	color: "white",
};

const Badge = (props) => {
	return (
		<button style={buttonStyles} type="button" className="btn btn-primary">
			{props.label}
			<span style={badgeStyles} className="badge badge-light">
				{props.number}
			</span>
		</button>
	);
};
Badge.propTypes = {
	label: PropTypes.string,
	number: PropTypes.string,
};
//dont forget to change the label
ReactDOM.render(<Badge label="Alerts" number="2" />, document.querySelector("#myDiv"));

{
	/* <button className="btn btn-primary" style={
	Object {
      "background": "yellow",
	"border": "none",
		"color": "black",
    }
  }
type = "button"
	>
	Alerts
	< span
className = "badge badge-light"
style = {
	Object {
	"background": "red",
		"borderRadius": "50%",
			"color": "white",
      }
    }
  >
	2
  </span >
</button > */
}
