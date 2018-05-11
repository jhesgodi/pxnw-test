import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

import { noop } from '../../lib/utils';

/* ---------------- Component ---------------- */

const GistRow = props => (
  <TouchableOpacity
    activeOpacity={0.5}
    style={styles.container}
    onPress={() => props.onSelect(props)}
  >
    <Text>{props.created_at}</Text>
    <Text>{props.description || 'No title'}</Text>
  </TouchableOpacity>
);

GistRow.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,

  onSelect: PropTypes.func,
};

GistRow.defaultProps = {
  onSelect: noop,
};

export default GistRow;

/* ---------------- Styles ---------------- */

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
