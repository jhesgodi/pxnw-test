import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/ProfileScreen';
import { navigationOptions } from '../config/styles/navigation';

const Stack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  {
    ...navigationOptions,
  },
);

Stack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={`ios-contact${focused ? '' : '-outline'}`}
      size={25}
      color={tintColor}
    />
  ),
};

export default Stack;
