import React from 'react';
import style from './ProfileInfo.module.css';
import ProfileStatus from './Status/ProfileStatus';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import ProfileForm from './ProfileForm/ProfileForm';
import { isPageOwner } from '../../samples/isPageOwner/isPageOwner';
import { Container, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(3)
		}
	},
	photoBox: {
		display: 'flex',
		justifyContent: 'center',
		paddingBottom: theme.spacing(12)
	},
	profilePhoto: {},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3)
	},
	large: {
		width: theme.spacing(20),
		height: theme.spacing(20)
	}
}));

const ProfileInfo = (props) => {
	const classes = useStyles();
	return (
		<section className={style.profile_info}>
			<Paper elevation={3}>
				<Container fixed>
					<Grid container justify="center" md={12}>
						<Grid item spacing={3} md={12} zeroMinWidth className={classes.photoBox}>
							<ProfilePhoto
								photoLarge={props.profile.photos.large}
								loggedUserID={props.loggedUserID}
								userID={props.userID}
								setPhoto={props.setPhoto}
							/>
						</Grid>
					</Grid>
				</Container>
				{props.editModeProfile ? (
					<Grid container>
						<ProfileStatus userStatus={props.userStatus} setStatus={props.setStatus} />
						<ProfileForm profile={props.profile} setProfileData={props.setProfileData} />
					</Grid>
				) : (
					<Container>
						<Grid container md={12} justify="center" alignItems="center">
							<Grid
								item
								xs={12}
								style={{ position: 'relative', textAlign: 'center', paddingBottom: '50px' }}
							>
								<Typography variant="h6" gutterBottom>
									{props.profile.fullName}
								</Typography>
								{isPageOwner.check() && (
									<button
										type="button"
										onClick={props.isEditMode}
										style={{ position: 'absolute', top: 0, right: 0 }}
									>
										Edit Mode
									</button>
								)}
							</Grid>
						</Grid>
						<Grid container md={12} direction="column" spacing={3} justify="center" alignItems="center">
							<Grid item xs>
								<div className={style.profile_about}>&#128171; About me: {props.profile.aboutMe}</div>
							</Grid>
							<Grid item xs>
								<span> &#128064; Looking for a jog: {props.profile.lookingForAJob ? 'yes' : 'no'}</span>
							</Grid>
							<span>
								{' '}
								&#129309; Looking for a job description: {props.profile.lookingForAJobDescription}
							</span>
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
						</Grid>
					</Container>
				)}
			</Paper>
		</section>
	);
};

export default ProfileInfo;
