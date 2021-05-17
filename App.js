import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import MainNavigator from './src/Router';

export default function App() {
	return (
		<Provider store={store}>
			<MainNavigator />
		</Provider>
	);
}
