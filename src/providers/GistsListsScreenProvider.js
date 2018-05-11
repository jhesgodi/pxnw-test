import React from 'react';
import { connect } from 'react-redux';

import GistsActions from '../redux/GistsRedux';
import GistListScreen from '../screens/gists/GistListScreen';

const mapStateToProps = state => ({
  hasErrors: state.Gists.error,
  isLoading: state.Gists.fetching,
  gists: state.Gists.gists,
});

const mapDispatchToProps = ({ fetchGists }) => ({
  fetchGists,
});

export default connect(mapStateToProps, mapDispatchToProps(GistsActions))(
  GistListScreen,
);
