import React from 'react';
import style from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from '../samples/Preloader/Preloader';

const Profile = (props) => {
	if (!props.profile) {
		return <Preloader />;
	}
	return (
		<main className={style.profile}>
			<ProfileInfo
				userID={props.userID}
				loggedUserID={props.loggedUserID}
				profile={props.profile}
				userStatus={props.userStatus}
				setStatus={props.setStatus}
				setPhoto={props.setPhoto}
				editModeProfile={props.editModeProfile}
				setProfileData={props.setProfileData}
				isEditMode={props.isEditMode}
			/>
			<PostsContainer />
		</main>
	);
};

export default Profile;
