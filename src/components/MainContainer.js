import React, { Component } from 'react';
import { View } from 'react-native';

/* ---------------- Component ---------------- */

import AppNavigator from '../navigation/AppNavigation';

class MainContainer extends Component {
  render() {
    return <AppNavigator screenProps={this.props} />;
  }
}

export default MainContainer;
