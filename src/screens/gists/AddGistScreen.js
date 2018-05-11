import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import AddGistForm from '../../components/gists/AddGistForm';
import Loading from '../../components/Loading';
import styles from '../../config/styles/index';

class AddGistScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Add Post',
  };

  state = {
    submitOnProgress: false,
  };

  toggleSubmitOnProgress = () => {
    this.setState({
      submitOnProgress: !this.state.submitOnProgress,
    });
  };

  checkSubmitOnProgress = () => {
    const finished = this.props.saved && this.state.submitOnProgress;
    if (finished) {
      this.toggleSubmitOnProgress();
      this.props.navigation.navigate('GistList');
    }
  };

  handleSubmit = formState => {
    this.toggleSubmitOnProgress();
    this.props.saveGist('', formState);
  };

  componentDidUpdate() {
    this.checkSubmitOnProgress();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Add new post</Text>
        <AddGistForm onSubmit={this.handleSubmit} />
        {this.props.saving && <Loading />}
      </View>
    );
  }
}

export default AddGistScreen;
