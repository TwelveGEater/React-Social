import React, { useState } from 'react';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Container, Checkbox, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(3)
		}
	},
	checkedBox: {
		marginTop: '30px'
	},
	button: {
		margin: theme.spacing(1)
	}
}));

const ProfileForm = (props) => {
	const classes = useStyles();

	const [ fieldQualifier, changeFieldQualifier ] = useState(' ');
	const [ messageError, changeMessageError ] = useState(' ');

	const formik = useFormik({
		initialValues: props.profile,
		onSubmit: async (values, formik) => {
			props.setProfileData(values).catch((error) => {
				let [ errorText, fieldError ] = error.message.split(/\(\s*/);

				let fieldSelector = fieldError.split(/->\s*/).map((e) => {
					let str = e.match(/\w/gi).join('');
					return str.charAt(0).toLowerCase() + str.slice(1);
				});
				changeFieldQualifier(fieldSelector[1]);
				changeMessageError(errorText);
			});
		}
	});

	return (
		<Container fixed className={classes.root}>
			<Grid container justify="center" md={5}>
				<form onSubmit={formik.handleSubmit}>
					<TextField
						variant="standard"
						margin="normal"
						id="fullName"
						label="Full Name"
						name="fullName"
						autoComplete="fullName"
						autoFocus
						onChange={formik.handleChange}
						value={formik.values.fullName}
						required
						fullWidth
					/>
					<TextField
						variant="standard"
						margin="normal"
						id="aboutMe"
						label="About me"
						name="aboutMe"
						autoComplete="aboutMe"
						autoFocus
						onChange={formik.handleChange}
						value={formik.values.aboutMe}
						required
						fullWidth
					/>
					<Grid item className={classes.checkedBox}>
						<InputLabel htmlFor="lookingForAJob" style={{ display: 'inline', marginRight: '10px' }}>
							Looking for a job:
						</InputLabel>
						<Checkbox
							checked={formik.values.lookingForAJob}
							id="lookingForAJob"
							name="lookingForAJob"
							autoComplete="lookingForAJob"
							onChange={formik.handleChange}
							value={formik.values.lookingForAJob}
						/>
					</Grid>
					{formik.values.lookingForAJob && (
						<TextField
							variant="standard"
							margin="normal"
							fullWidth
							id="lookingForAJobDescription"
							label="Looking for a job description"
							name="lookingForAJobDescription"
							autoComplete="lookingForAJobDescription"
							autoFocus
							onChange={formik.handleChange}
							value={formik.values.lookingForAJobDescription}
							required
						/>
					)}
					<Grid item className={classes.checkedBox}>
						<InputLabel htmlFor="lookingForAJob">Сontacts:</InputLabel>
						{Object.keys(formik.values.contacts).map((key) => (
							<TextField
								key={key}
								margin="normal"
								fullWidth
								id={key}
								label={key}
								name={`contacts[${key}]`}
								autoFocus
								onChange={formik.handleChange}
								value={formik.values.contacts[key]}
								size="small"
								inputProps={{ 'aria-label': 'description' }}
								error={fieldQualifier === key ? true : false}
								helperText={fieldQualifier === key ? messageError : ''}
							/>
						))}
					</Grid>

					<Grid item className="buttons">
						<Button
							type="submit"
							variant="contained"
							color="primary"
							size="small"
							className={classes.button}
							onClick={formik.onSubmit}
							startIcon={<SaveIcon />}
						>
							Save
						</Button>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							size="small"
							className={classes.button}
							onClick={formik.onSubmit}
							startIcon={<RotateLeftIcon />}
						>
							Reset
						</Button>
					</Grid>
				</form>
			</Grid>
		</Container>
	);
};

export default ProfileForm;
