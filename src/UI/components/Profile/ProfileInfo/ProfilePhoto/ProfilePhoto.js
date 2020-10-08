import React, { useState } from 'react';
import style from './ProfilePhoto.module.css';
import userProfilePhoto from '../../../../../assets/images/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { isPageOwner } from './../../../samples/isPageOwner/isPageOwner';

const ProfilePhoto = ({ photoLarge, setPhoto }) => {
	const [ showButton, changeToggle ] = useState(false);

	const uploadPhoto = (e) => {
		if (e.target.files.length) setPhoto(e.target.files[0]);
	};

	return (
		<div
			className={style.mainPhoto}
			onMouseOver={() => changeToggle(true)}
			onMouseLeave={() => changeToggle(false)}
		>
			{isPageOwner.check() && showButton ? (
				<div>
					<div className={style.uploadPhotoIcon}>
						<FontAwesomeIcon icon={faCamera} />
					</div>
					<input
						type="file"
						id="file"
						name="file"
						placeholder="image"
						className={style.uploadPhoto}
						onChange={uploadPhoto}
					/>
				</div>
			) : null}
			<img src={photoLarge || userProfilePhoto} className={style.profile_photo} alt="user" />
		</div>
	);
};

export default ProfilePhoto;
