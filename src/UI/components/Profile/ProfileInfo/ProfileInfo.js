import React from 'react';
import style from './ProfileInfo.module.css';
import ProfileStatus from './Status/ProfileStatus';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import ProfileForm from './ProfileForm/ProfileForm';
import { isPageOwner } from '../../samples/isPageOwner/isPageOwner';
import { Container, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SettingsIcon from '@material-ui/icons/Settings';

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
		position: 'relative',
		height: '100px'
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3)
	},
	large: {
		width: theme.spacing(20),
		height: theme.spacing(20)
	},
	nameField: {
		fontSize: '19px',
		fontWeight: '800',
		lineHeight: '1.3125'
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
					<Container style={{ paddingBottom: '40px' }}>
						<Grid
							container
							md={12}
							justify="center"
							alignItems="center"
							style={{ borderBottom: '1px solid #ffffff1f' }}
						>
							<Grid item xs={12} style={{ position: 'relative', textAlign: 'center' }}>
								<Typography variant="h6" className={classes.nameField} gutterBottom>
									{props.profile.fullName}
								</Typography>
								{isPageOwner.check() && (
									<button
										type="button"
										onClick={props.isEditMode}
										style={{
											position: 'absolute',
											top: 0,
											right: 0,
											backgroundColor: 'transparent',
											border: 'none'
										}}
									>
										<SettingsIcon color="action" />
									</button>
								)}
							</Grid>
							<Grid item xs={12}>
								<ProfileStatus userStatus={props.userStatus} setStatus={props.setStatus} />
							</Grid>
						</Grid>
						<Grid
							container
							md={12}
							direction="column"
							spacing={3}
							justify="center"
							alignItems="start"
							style={{ paddingTop: '20px' }}
						>
							<Grid item xs>
								<div className={style.profile_about}>
									&#128171; About me:&#8192;{props.profile.aboutMe}
								</div>
							</Grid>
							<Grid item xs>
								<span>
									{' '}
									&#128064; Looking for a job:&#8192;{props.profile.lookingForAJob ? 'yes' : 'no'}
								</span>
							</Grid>
							<Grid item xs>
								<span>
									&#129309; Looking for a job description:&#8192;{props.profile.lookingForAJobDescription}
								</span>
							</Grid>
							<Grid item xs>
								&#128172; Contacts:{' '}
								{Object.entries(props.profile.contacts).map(
									(i) =>
										i[1] && (
											<Grid item xs key={i}>
												<span>{i[0]}:</span>
												<a target="_blank" href={i[1]}>
													{i[1]}
												</a>
											</Grid>
										)
								)}
							</Grid>
						</Grid>
					</Container>
				)}
			</Paper>
		</section>
	);
};

export default ProfileInfo;
