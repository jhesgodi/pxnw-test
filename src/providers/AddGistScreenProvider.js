import React from 'react';
import { connect } from 'react-redux';

import GistsActions from '../redux/GistsRedux';
import AddGistScreen from '../screens/gists/AddGistScreen';

const mapStateToProps = state => ({
  saving: state.Gists.saving,
  saved: state.Gists.saved,
});

const mapDispatchToProps = ({ saveGist }) => ({
  saveGist,
});

export default connect(mapStateToProps, mapDispatchToProps(GistsActions))(
  AddGistScreen,
);
