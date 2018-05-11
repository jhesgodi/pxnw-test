import React from 'react';
import { View, SectionList, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import GistRow from './GistRow';

/* ---------------- Component ---------------- */

const GistList = props => {
  const renderHeader = ({ section }) => {
    return <Text style={styles.sectionHeader}>{section.title}</Text>;
  };

  const renderItems = ({ item }) => (
    <GistRow {...item} onSelect={props.onSelect} />
  );

  const groupedGists = props.gists.reduce((acc, gist, key) => {
    const { category } = gist;
    const prevGists = acc[category] || [];
    const newGist = { key, ...gist };

    return {
      ...acc,
      [category]: [...prevGists, newGist],
    };
  }, {});

  const sections = Object.keys(groupedGists)
    .sort()
    .map(title => ({
      title,
      data: groupedGists[title],
    }));

  return (
    <SectionList
      style={styles.container}
      keyExtractor={item => item.key}
      sections={sections}
      renderItem={renderItems}
      renderSectionHeader={renderHeader}
    />
  );
};

GistList.propTypes = {
  gists: PropTypes.array,
  onSelect: PropTypes.func,
};

export default GistList;

/* ---------------- Styles ---------------- */

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    backgroundColor: '#e1e4e8',
    color: '#000',
    fontWeight: 'bold',
  },
});
