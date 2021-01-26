import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./Screens/HomeScreen";
import HistoryScreen from "./Screens/HistoryScreen";

const myApp = createStackNavigator({
  Calculator: { screen: HomeScreen },
  History: { screen: HistoryScreen },

});

const AppContainer = createAppContainer(myApp);

export default function App() {
  return (
    <AppContainer />
  );
}