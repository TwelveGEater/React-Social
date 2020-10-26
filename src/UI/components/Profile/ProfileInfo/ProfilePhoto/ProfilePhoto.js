import React, { useState } from 'react';
import style from './ProfilePhoto.module.css';
import userProfilePhoto from '../../../../../assets/images/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { isPageOwner } from './../../../samples/isPageOwner/isPageOwner';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, Container } from '@material-ui/core';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		'& > *': {
			margin: theme.spacing(1)
		},
		top: theme.spacing(13)
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3)
	},
	large: {
		width: theme.spacing(20),
		height: theme.spacing(20),
		boxShadow: '0 5px 15px -8px rgba(0,0,0,.24), 0 8px 10px -5px rgba(0,0,0,.2)',
		position: 'absolute',
		top: theme.spacing(-10.5)
	},
	fileBtnBox: {
		backgroundColor: 'transparent',
		position: 'absolute',
		width: theme.spacing(10),
		height: theme.spacing(10),
		borderRadius: '50%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	fileBtn: {
		backgroundColor: 'transparent',
		position: 'absolute',
		width: theme.spacing(20),
		height: theme.spacing(20),
		top: theme.spacing(-10.5),
		borderRadius: '50%',
		color: 'transparent',
		zIndex: '100',
		cursor: 'pointer'
	},
	changeIcon: {
		position: 'absolute',
		top: theme.spacing(-4),
		color: theme.palette.primary.main
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
				onMouseOver={() => changeToggle(true)}
				onMouseLeave={() => changeToggle(false)}
				className={classes.fileBtnBox}
			>
				<Avatar
					alt="user photo"
					src={photoLarge || userProfilePhoto}
					className={classes.large}
					style={{ filter: showButton && 'brightness(0.15)', transition: 'filter 0.2s' }}
				/>
				{isPageOwner.check() && showButton ? (
					<div className={classes.fileBtnBox}>
						<label for="file-upload" className={classes.fileBtn} />
						<input
							id="file-upload"
							type="file"
							className={classes.fileBtn}
							style={{ zIndex: '-1' }}
							onChange={uploadPhoto}
						/>
						<CameraAltOutlinedIcon className={classes.changeIcon} style={{ fontSize: 60 }} />
					</div>
				) : null}
				{/* <img src={photoLarge || userProfilePhoto} className={style.profile_photo} alt="user" /> */}
			</div>
		</Container>
	);
};

export default ProfilePhoto;
