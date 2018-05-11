import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LoginStack from './LoginNavigation';
import GistsStack from './GistsNavigation';
import ProfileStack from './ProfileNavigation';

const GistsTabs = createBottomTabNavigator(
  {
    Posts: GistsStack,
    Profile: ProfileStack,
  },
  {
    tabBarOptions: {
      activeTintColor: '#3478f6',
    },
  },
);

const AppNavigator = createSwitchNavigator({
  Home: HomeScreen,
  Login: LoginStack,
  GistsTabs: GistsTabs,
});

export default AppNavigator;
