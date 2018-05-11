import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

/* ---------------- Component ---------------- */

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Github Profile',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>User profile screen.</Text>
      </View>
    );
  }
}

export default ProfileScreen;

/* ---------------- Styles ---------------- */

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
});
