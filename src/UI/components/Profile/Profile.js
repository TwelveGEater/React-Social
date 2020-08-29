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
			<ProfileInfo profile={props.profile} userStatus={props.userStatus} setStatus={props.setStatus} />
			<PostsContainer />
		</main>
	);
};

export default Profile;
