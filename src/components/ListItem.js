import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions'; //meaning: give me everything that was exported from the actions file 

class ListItem extends Component {
	render() {
		const { titleStyle } = styles;

		return (
			<CardSection>
				<Text style={titleStyle}>
					{this.props.library.title}
				</Text>
			</CardSection>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

// take the actions and pass to the component as props
export default connect(null, actions)(ListItem);
