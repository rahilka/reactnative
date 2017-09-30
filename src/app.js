import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';	//it will go to the index.js file by default
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null }; //set tu null 'cos we don't know if the user is signed in yet

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyCFOj_PXeSsnxRz73aYjGH5TZUiPx9X_gc',
			authDomain: 'authentication-70ec6.firebaseapp.com',
			databaseURL: 'https://authentication-70ec6.firebaseio.com',
			projectId: 'authentication-70ec6',
			storageBucket: 'authentication-70ec6.appspot.com',
			messagingSenderId: '935029723967'
		});

		firebase.auth().onAuthStateChanged((user) => {	//event handler for sign in / sign out
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<Button onPress={() => firebase.aut().signOut()}>
						Log Out
					</Button>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
