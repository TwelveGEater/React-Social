import React from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { setAuthorizationData, getAuthorization, getLogout } from './../../../BLL/auth-reducer';

class SidebarContainer extends React.Component {
	componentDidMount() {
		this.props.getAuthorization();
	}
	render() {
		return <Sidebar {...this.props} />;
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	visitedUsers: state.sidebarPage.friendList
});

export default connect(mapStateToProps, { setAuthorizationData, getAuthorization, getLogout })(SidebarContainer);
