import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, getUserProfile, getUserStatus, setStatus } from './../../../BLL/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userID = this.props.match.params.userID;
		if (!userID) {
			userID = this.props.loggedUserID;
		}
		this.props.getUserProfile(userID);
		this.props.getUserStatus(userID);
	}
	render() {
		return (
			<Profile profile={this.props.profile} userStatus={this.props.userStatus} setStatus={this.props.setStatus} />
		);
	}
}

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		userStatus: state.profilePage.userStatus,
		loggedUserID: state.auth.id
	};
};

export default compose(
	connect(mapStateToProps, { setUserProfile, getUserProfile, getUserStatus, setStatus }),
	withRouter
)(ProfileContainer);
