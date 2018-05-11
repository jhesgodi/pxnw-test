import React, { Component } from 'react';
import {
  AppRegistry,
  Linking,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import WeDeploy from 'wedeploy';

import { AuthHelper } from '../config/env';
import styles from '../config/styles/index';

// FIXME: SignIn is not working, fix iOS deeplinking config
class SignIn extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Sign-in',
    headerLeft: (
      <Button
        title={'Home'}
        onPress={() => navigation.navigate('Home')}
        color="#3478f6"
      />
    ),
  });

  auth = WeDeploy.auth(AuthHelper.url);

  state = {
    signedIn: false,
    user: null,
  };

  componentDidMount() {
    const url = 'pxnwChallenge://';
    Linking.addEventListener('url', this.handleOpenURL.bind(this));
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL.bind(this));
  }

  handleOpenURL(event) {
    let authTokenIndex = event.url.indexOf('#access_token=');

    if (authTokenIndex > 0) {
      let authToken = event.url.substring(authTokenIndex + 14);

      this.auth
        .loadCurrentUser(authToken)
        .then(user => {
          this.setState(previousState => {
            return { signedIn: true, user: user };
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  navigateToGists = () => {
    this.props.navigation.navigate('GistsTabs');
  };

  render() {
    if (this.state.signedIn) {
      return (
        <View style={styles.centerContainer}>
          <Text style={styles.heading}>You are now signed-in!</Text>
          <Text style={styles.baseText}>Name "{'this.state.user.name'}"</Text>
          <Text style={styles.baseText}>Email: {'this.state.user.email'}</Text>
          <Text style={styles.baseText}>Id: {'this.state.user.id'}</Text>
          <Button
            title="Browse some blog entries"
            onPress={this.navigateToGists}
          />
          <Button
            onPress={this.signOut.bind(this)}
            style={styles.button}
            title="Sign-out"
          />
        </View>
      );
    } else {
      return (
        <View style={styles.centerContainer}>
          <Text style={styles.heading}>Sign-in</Text>
          <Button
            onPress={this.signInGithub.bind(this)}
            style={styles.button}
            title="Sign-in with Github"
          />
        </View>
      );
    }
  }

  openURL(authUrl) {
    Linking.canOpenURL(authUrl)
      .then(supported => {
        if (supported) {
          return Linking.openURL(authUrl);
        } else {
          console.error('Failed to open URI:', authUrl);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  signInGithub() {
    let githubProvider = new this.auth.provider.Github();
    githubProvider.setProviderScope('user:email');
    githubProvider.setRedirectUri('pxnwChallenge://');

    let authUrl = githubProvider.makeAuthorizationUrl(AuthHelper.url);

    this.openURL(authUrl);
  }

  signOut() {
    this.auth
      .signOut()
      .then(() => {
        this.setState(previousState => {
          return { signedIn: false, user: null };
        });
      })
      .catch(error => {
        console.error('Error signing out', error);
      });
  }
}

export default SignIn;
