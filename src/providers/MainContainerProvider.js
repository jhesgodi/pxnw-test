import React from 'react';
import { connect } from 'react-redux';

import MainContainer from '../components/MainContainer';

const mapStateToProps = state => ({
  loggedIn: state.Login.loggedin,
});

export default connect(mapStateToProps)(MainContainer);
