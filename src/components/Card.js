import React from 'react';
import { View } from 'react-native';

const Card = () => {
	return (
		<View style={styles.containerStyle}>
		</View>
	);
};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		margineLeft: 5,
		margineRight: 5,
		margineTop: 10
	}
};

export default Card;
