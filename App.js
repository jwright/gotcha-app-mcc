import React from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import HomeScreen from "./src/screens/HomeScreen";

const Navigator = createSwitchNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    initialRouteName: "Home",
  },
);

const AppNavigationContainer = createAppContainer(Navigator);

const App = () => (
  <AppNavigationContainer />
)

export default App;
