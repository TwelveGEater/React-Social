import React from 'react';
import style from './ProfileInfo.module.css';
import ProfileStatus from './Status/ProfileStatus';

const ProfileInfo = (props) => {
	return (
		<section className={style.profile_info}>
			<a href="#" tabIndex="-1" className={style.profile_link}>
				<div className={style.profile_background} />
			</a>
			<a href="#">
				<div>
					<img src={props.profile.photos.large} className={style.profile_photo} alt="user" />
				</div>
			</a>
			<span>{props.profile.fullName}</span>
			<ProfileStatus userStatus={props.userStatus} setStatus={props.setStatus} />
			<div className={style.profile_about}>{props.profile.aboutMe}</div>
		</section>
	);
};

export default ProfileInfo;
