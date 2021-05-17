import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExample } from '../actions';

const DetailScreen = () => {
	const examples = useSelector((state) => state.keyReducer.examples);
	const dispatch = useDispatch();

	return (
		<View>
			<Text>Detail</Text>
			<Text>{examples}</Text>
			<View style={{ width: '100%', height: 200 }}></View>
			<Button
				title="Hace Dispatch Async de Data Name"
				onPress={() => dispatch(fetchExample(1))}
			/>
		</View>
	);
};

export default DetailScreen;
