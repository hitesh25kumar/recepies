import React from 'react';
import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './screens/Home';
import Recipes from './screens/Recipes';
import IngredientDetails from './screens/IngredientDetails';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Recipes: {
    screen: Recipes,
  },
  IngredientDetails: {
    screen: IngredientDetails,
  },
});

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
