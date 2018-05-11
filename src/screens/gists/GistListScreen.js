import React, { Component } from 'react';
import { Button, View, TextInput, Text } from 'react-native';

import GistsList from '../../components/gists/GistsList';
import Loading from '../../components/Loading';
import styles from '../../config/styles/index';

class GistListScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Posts',
    headerRight: (
      <Button
        title="Add"
        onPress={() => navigation.navigate('GistAdd')}
        color="#3478f6"
      />
    ),
    headerLeft: (
      <Button
        title={'Home'}
        onPress={() => navigation.navigate('Home')}
        color="#3478f6"
      />
    ),
  });

  state = {
    username: 'jhesgodi',
    search: '',
    filter: '',
  };

  handleGistSelected = gist => {
    const params = {
      gist,
      goToGist: this.handleGoToGist,
    };
    this.props.navigation.push('GistDetails', params);
  };

  handleGoToGist = gistId => {
    const gist = this.props.gists[gistId] || false;
    // FIXME: This will casue a screens over stacking effect
    // investigate and refactor later!
    if (gist) this.handleGistSelected(gist);
  };

  handleSearch = () => {
    const input = this.state.search;
    if (input) this.props.fetchGists(input);
  };

  componentWillMount() {
    this.props.fetchGists(this.state.username);
  }

  render() {
    const { isLoading, hasErrors, gists } = this.props;
    const hasGists = gists && gists.length !== 0;
    const showGists = !isLoading && hasGists;
    const hasNoGists = !hasGists && !hasErrors && !isLoading;
    const filteredGists = gists.filter(({ description }) => {
      const haystack = description || '';

      return (
        this.state.filter === '' ||
        haystack.toLowerCase().search(this.state.filter) > -1
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.gistControls}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Search posts by</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onEndEditing={this.handleSearch}
              onChangeText={val =>
                this.setState({ search: val, username: val })
              }
              placeholder="User"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Filter by</Text>

            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={filter =>
                this.setState({ filter: filter.toLowerCase() })
              }
              placeholder="Category"
            />
          </View>
          <Text style={styles.baseText}>Post by {this.state.username}</Text>
        </View>
        {/* TODO: Isolate: create individual stateless components for each */}
        {hasNoGists && <Text>No posts found</Text>}
        {showGists && (
          <View style={styles.gistList}>
            <GistsList
              gists={filteredGists}
              onSelect={this.handleGistSelected}
            />
          </View>
        )}
        {hasErrors && <Text>There was an error, plase try again</Text>}
        {isLoading && <Loading />}
      </View>
    );
  }
}

export default GistListScreen;
