import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
	setUserProfile,
	getUserProfile,
	getUserStatus,
	setStatus,
	setPhoto,
	setProfileData,
	isEditMode
} from './../../../BLL/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
	refreshProfile() {
		let userID = this.props.match.params.userID;
		if (!userID) {
			this.props.history.push('/login');
		}
		this.props.getUserProfile(userID);
		this.props.getUserStatus(userID);
	}

	componentDidMount() {
		this.refreshProfile();
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.props.match.params.userID != prevProps.match.params.userID) this.refreshProfile();
	}

	render() {
		return (
			<Profile
				profile={this.props.profile}
				userStatus={this.props.userStatus}
				setStatus={this.props.setStatus}
				setPhoto={this.props.setPhoto}
				editModeProfile={this.props.editModeProfile}
				setProfileData={this.props.setProfileData}
				isEditMode={this.props.isEditMode}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		userStatus: state.profilePage.userStatus,
		loggedUserID: state.auth.id,
		editModeProfile: state.profilePage.editModeProfile
	};
};

export default compose(
	connect(mapStateToProps, {
		setUserProfile,
		getUserProfile,
		getUserStatus,
		setStatus,
		setPhoto,
		setProfileData,
		isEditMode
	}),
	withRouter
)(ProfileContainer);
