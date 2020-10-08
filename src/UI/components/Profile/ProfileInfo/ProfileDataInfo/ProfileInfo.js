import React from 'react';
import style from './ProfileInfo.module.css';
import ProfileStatus from './Status/ProfileStatus';
import userProfilePhoto from '../../../../assets/images/user.png';

const ProfileInfo = (props) => {
	const uploadPhoto = (e) => {
		if (e.target.files.length) props.setPhoto(e.target.files[0]);
	};

	return (
		<section className={style.profile_info}>
			<a href="#">
				<div>
					<img
						src={props.profile.photos.large || userProfilePhoto}
						className={style.profile_photo}
						alt="user"
					/>
				</div>
			</a>

			<ProfileStatus userStatus={props.userStatus} setStatus={props.setStatus} />

			{props.editModeProfile ? (
				<div>Edit</div>
			) : (
				<div>
					{props.loggedUserID == props.userID ? (
						<input type="file" id="file" name="file" className={style.uploadPhoto} onChange={uploadPhoto} />
					) : null}
					<br />
					<span>{props.profile.fullName}</span>
					<div>
						<span> &#128064; Looking for a jog: {props.profile.lookingForAJob ? 'yes' : 'no'}</span>
					</div>
					<span> &#129309; Looking for a job description:</span>
					<div>
						{' '}
						&#128172; Contacts: {Object.keys(props.profile.contacts).map((i) => <div key={i}>{i}</div>)}
					</div>
					<div className={style.profile_about}>&#128171; About me: {props.profile.aboutMe}</div>
				</div>
			)}
		</section>
	);
};

export default ProfileInfo;
