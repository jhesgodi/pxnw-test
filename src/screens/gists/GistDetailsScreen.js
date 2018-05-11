import React from 'react';
import { Button, View, Text, Dimensions, ScrollView } from 'react-native';
import HTML from 'react-native-render-html';
import MarkdownIt from 'markdown-it';

import Loading from '../../components/Loading';
import * as queryManager from '../../services/queryManager';
import styles from '../../config/styles';

class GistDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Gist Details',
    };
  };

  constructor(props) {
    super(props);

    this.renders = {
      md: this.renderMD.bind(this),
      html: this.renderHTML,
    };
    this.state = {
      content: [],
    };
    this.markdownIt = new MarkdownIt();
    this.gist = this.props.navigation.getParam('gist');
    this.goToGist = this.props.navigation.getParam('goToGist');
  }

  handleGoToGist = next => {
    this.goToGist(Number(this.gist.id) + next);
  };

  handleSubmit = formState => {
    this.props.navigation.navigate('GistList');
  };

  safeContent = content => {
    if (typeof content === 'object') {
      return JSON.stringify(content);
    }

    return content;
  };

  renderMD(content) {
    const html = this.markdownIt.render(content);
    return this.renderHTML(html);
  }

  renderHTML(content) {
    return (
      <HTML html={content} imagesMaxWidth={Dimensions.get('window').width} />
    );
  }

  updateContent = content => {
    this.setState({
      content: [...this.state.content, content],
    });
  };

  renderBodyContent = ({ content, fileExtension }) => {
    const parser = this.renders[fileExtension];
    const safeContent = this.safeContent(content);

    return parser ? parser(safeContent) : <Text>{safeContent}</Text>;
  };

  renderBodyHeading = ({ title }) => {
    return (
      <Text style={[styles.centerText, styles.label, styles.strong]}>
        {title}
      </Text>
    );
  };

  renderContent = file => {
    return (
      <View key={file.key} style={styles.bodyContent}>
        {this.renderBodyHeading(file)}
        {this.renderBodyContent(file)}
      </View>
    );
  };

  componentDidMount() {
    this.gist.files.map(file => {
      queryManager
        .getGistFileRaw(file.rawUrl)
        .then(content => this.updateContent({ ...file, content }));
    });
  }

  render() {
    const hasContent = this.state.content && this.state.content.length !== 0;

    return (
      <View style={styles.container}>
        <View style={styles.gistDetailsNav}>
          <Button title="Prev" onPress={() => this.handleGoToGist(-1)} />
          <Button title="Next" onPress={() => this.handleGoToGist(+1)} />
        </View>
        <View style={styles.gisDetailsHeader}>
          <Text style={styles.baseText}>{this.gist.title || 'No Title'}</Text>
          <Text style={styles.baseText}>{this.gist.created_at}</Text>
        </View>
        <ScrollView style={styles.body}>
          {!hasContent && <Loading />}
          {hasContent && this.state.content.map(this.renderContent)}
          <View style={styles.gisDetailsFooter}>
            <Text style={styles.baseText}>
              {this.gist.owner.login || 'No Author'}
            </Text>
            <Text style={styles.baseText}>{this.gist.created_at}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default GistDetailScreen;
