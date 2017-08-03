import React, { Component } from 'react';
import Person from './Person';

class HelloWorld extends Component {

	propTypes: {
		name: React.PropTypes.string,
		isPerson: React.PropTypes.bool
	}

	getDefaultProps() {
		return {
			name: 'Stevie Duh'
		}
	}

	render() {
		var greeting = 'World';

		if(this.props.isPerson) {
			greeting = (<Person name={this.props.name} />)
		}

		return (	
			<h1> Hello {greeting} </h1>
	
		)
	};
}

export default HelloWorld