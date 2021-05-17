import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const MainNavigator = createStackNavigator({
	Home: {
		screen: HomeScreen,
	},
	Detail: {
		screen: DetailScreen,
	},
});

export default createAppContainer(MainNavigator);
