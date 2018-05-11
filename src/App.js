import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './redux/index';
import MainContainer from './providers/MainContainerProvider';

const store = configureStore();

/**
 * FIXME:
 * isMounted warning fix as per, remove when issues get fixed:
 * https://github.com/react-navigation/react-navigation/issues/3956
 */
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainContainer />
      </Provider>
    );
  }
}

export default App;
