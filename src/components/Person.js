import React, { Component } from 'react';

class Person extends Component {

	propTypes: {
		name: React.PropTypes.string,
		isPerson: React.PropTypes.bool
	}

	render() {
		return (

		<span>{this.props.name}</span>

		)
	};
}

export default Person