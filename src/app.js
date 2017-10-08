import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyAdaAYTqbNtL2TfzsTizdx5fWct8OKsN9U',
			authDomain: 'manager-2e6b0.firebaseapp.com',
			databaseURL: 'https://manager-2e6b0.firebaseio.com',
			projectId: 'manager-2e6b0',
			storageBucket: '',
			messagingSenderId: '740792796814'
		};
		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Text>
						Hello!
					</Text>
				</View>
			</Provider>
		);
	}
};

export default App;
