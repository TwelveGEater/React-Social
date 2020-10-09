import React, { useState } from 'react';
import style from './ProfilePhoto.module.css';
import userProfilePhoto from '../../../../../assets/images/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { isPageOwner } from './../../../samples/isPageOwner/isPageOwner';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		'& > *': {
			margin: theme.spacing(1)
		},
		position: 'absolute',
		top: theme.spacing(13)
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3)
	},
	large: {
		width: theme.spacing(20),
		height: theme.spacing(20),
		boxShadow: '0 5px 15px -8px rgba(0,0,0,.24), 0 8px 10px -5px rgba(0,0,0,.2)'
	}
}));

const ProfilePhoto = ({ photoLarge, setPhoto }) => {
	const classes = useStyles();
	const [ showButton, changeToggle ] = useState(false);

	const uploadPhoto = (e) => {
		if (e.target.files.length) setPhoto(e.target.files[0]);
	};

	return (
		<Container className={classes.root}>
			<div
				className={style.mainPhoto}
				onMouseOver={() => changeToggle(true)}
				onMouseLeave={() => changeToggle(false)}
			>
				{isPageOwner.check() && showButton ? // <div>
				// 	<div className={style.uploadPhotoIcon}>
				// 		<FontAwesomeIcon icon={faCamera} />
				// 	</div>
				// 	<input
				// 		type="file"
				// 		id="file"
				// 		name="file"
				// 		placeholder="image"
				// 		className={style.uploadPhoto}
				// 		onChange={uploadPhoto}
				// 	/>
				// </div>
				null : null}
				<Avatar alt="user photo" src={photoLarge || userProfilePhoto} className={classes.large} />
				{/* <img src={photoLarge || userProfilePhoto} className={style.profile_photo} alt="user" /> */}
			</div>
		</Container>
	);
};

export default ProfilePhoto;
