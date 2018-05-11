import React from 'react';
import { connect } from 'react-redux';
import { Button, View, Text } from 'react-native';

import styles from '../config/styles/index';

class HomeScreen extends React.Component {
  navigateToLogin = () => {
    this.props.navigation.navigate('Login');
  };

  navigateToGists = () => {
    this.props.navigation.navigate('GistsTabs');
  };

  state = {
    loggedIn: false,
  };

  componentWillMount() {
    if (this.state.loggedIn) this.navigateToGists();
  }

  render() {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.centerText}>You are currently logged out.</Text>
        <Button title="Log In" onPress={this.navigateToLogin} />
        <Text style={styles.centerText}>Or</Text>
        <Button
          title="Browse some blog entries"
          onPress={this.navigateToGists}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.Login,
  };
};

export default connect(mapStateToProps)(HomeScreen);
