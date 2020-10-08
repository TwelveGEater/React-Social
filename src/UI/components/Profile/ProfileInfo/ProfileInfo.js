import React from 'react';
import style from './ProfileInfo.module.css';
import ProfileStatus from './Status/ProfileStatus';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import ProfileForm from './ProfileForm/ProfileForm';
import { isPageOwner } from '../../samples/isPageOwner/isPageOwner';

const ProfileInfo = (props) => {
	return (
		<section className={style.profile_info}>
			<ProfilePhoto
				photoLarge={props.profile.photos.large}
				loggedUserID={props.loggedUserID}
				userID={props.userID}
				setPhoto={props.setPhoto}
			/>
			<ProfileStatus userStatus={props.userStatus} setStatus={props.setStatus} />
			{props.editModeProfile ? (
				<ProfileForm profile={props.profile} setProfileData={props.setProfileData} />
			) : (
				<div>
					{isPageOwner.check() && (
						<button type="button" onClick={props.isEditMode}>
							Edit Mode
						</button>
					)}
					<span>{props.profile.fullName}</span>
					<div className={style.profile_about}>&#128171; About me: {props.profile.aboutMe}</div>
					<div>
						<span> &#128064; Looking for a jog: {props.profile.lookingForAJob ? 'yes' : 'no'}</span>
					</div>
					<span> &#129309; Looking for a job description: {props.profile.lookingForAJobDescription}</span>
					<div>
						{' '}
						&#128172; Contacts:{' '}
						{Object.entries(props.profile.contacts).map(
							(i) =>
								i[1] && (
									<div key={i}>
										<span>{i[0]}:</span>
										<a target="_blank" href={i[1]}>
											{i[1]}
										</a>
									</div>
								)
						)}
					</div>
				</div>
			)}
		</section>
	);
};

export default ProfileInfo;
