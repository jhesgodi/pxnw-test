import React from 'react';
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import styles from '../../config/styles/index';

class AddGistForm extends React.Component {
  state = {
    description: '',
    name: '',
    content: '',
    bgColor: '#fafbfc',
    isFormValid: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.description !== prevState.description ||
      this.state.content !== prevState.content
    ) {
      this.validateForm();
    }
  }

  getHandler = key => val => {
    this.setState({ [key]: val });
  };

  toggleBgColor = () => {
    const bgColor = this.state.bgColor === '#fafbfc' ? '#fff' : '#fafbfc';
    this.setState({ bgColor });
  };

  validateForm = () => {
    // TODO: Add proper validation
    const valid =
      this.state.description.length > 1 && this.state.content.trim().length > 1;

    this.setState({ isFormValid: valid });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.description}
          onChangeText={this.getHandler('description')}
          placeholder="Gist description..."
        />
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.getHandler('name')}
          placeholder="Filename including extension..."
        />
        <TextInput
          style={[
            styles.textarea,
            {
              backgroundColor: this.state.bgColor,
            },
          ]}
          value={this.state.content}
          multiline={true}
          numberOfLines={4}
          onChangeText={this.getHandler('content')}
          onFocus={this.toggleBgColor}
          onBlur={this.toggleBgColor}
          placeholder="File Content..."
        />
        <Button
          style={styles.submit}
          title="Submit"
          onPress={this.handleSubmit}
          disabled={!this.state.isFormValid}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default AddGistForm;
