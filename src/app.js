import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';	//it will go to the index.js file by default

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyCFOj_PXeSsnxRz73aYjGH5TZUiPx9X_gc',
			authDomain: 'authentication-70ec6.firebaseapp.com',
			databaseURL: 'https://authentication-70ec6.firebaseio.com',
			projectId: 'authentication-70ec6',
			storageBucket: 'authentication-70ec6.appspot.com',
			messagingSenderId: '935029723967'
		});
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<Text>An App!</Text>
			</View>
		);
	}
}

export default App;
