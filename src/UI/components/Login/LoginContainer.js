import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { getLogin } from './../../../BLL/auth-reducer';
import { compose } from 'redux';

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	userID: state.auth.id
});

export default compose(connect(mapStateToProps, { getLogin }))(Login);
