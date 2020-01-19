import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from './src/pages/HomePage';
import DogPage from './src/pages/DogPage';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomePage,
  },
  DogPage: {
    screen: DogPage,
  },
});

export default createAppContainer(AppNavigator);
