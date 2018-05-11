import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AddGistScreen from '../providers/AddGistScreenProvider';
import GistDetailScreen from '../screens/gists/GistDetailsScreen';
import GistListScreen from '../providers/GistsListsScreenProvider';
import { navigationOptions } from '../config/styles/navigation';

const Stack = createStackNavigator(
  {
    GistAdd: AddGistScreen,
    GistDetails: GistDetailScreen,
    GistList: GistListScreen,
  },
  {
    initialRouteName: 'GistList',
    ...navigationOptions,
  },
);

Stack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={`ios-list${focused ? '' : '-outline'}`}
      size={25}
      color={tintColor}
    />
  ),
};

export default Stack;
