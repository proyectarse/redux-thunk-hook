import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';
import { addExample, fetchExample } from '../actions';

const HomeScreen = (props) => {
	const examples = useSelector((state) => state.keyReducer.examples);
	const name = useSelector((state) => state.keyReducer.name);

	const dispatch = useDispatch();

	return (
		<View style={styles.container}>
			<Text>Inicio</Text>
			<Button
				title="Ir a Detalle"
				onPress={() => props.navigation.navigate('Detail')}
			/>
			<Text>Aquí debajo botón action sync.</Text>
			<Button
				title="Hace Dispatch Sync de Data Name"
				onPress={() => dispatch(addExample())}
			/>
			<Text>El estado del Example: {examples}</Text>
			<View style={{ width: '100%', height: 50 }}></View>
			<Text>Nombre con Fetch: {name}</Text>
			<Button
				title="Hace Dispatch Async de Data Name"
				onPress={() => dispatch(fetchExample(2))}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default HomeScreen;
