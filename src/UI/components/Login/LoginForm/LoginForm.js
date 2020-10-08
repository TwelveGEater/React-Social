import React from 'react';
import style from './LoginForm.module.css';
import { Formik } from 'formik';
import { useFormik, FormikErrors } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const required = (value) => (value ? undefined : <span className={style.errorMessage}>{'Required'}</span>);
const inputGroupPrepend = (icon) => {
	return (
		<div className={style.inputGroupPrepend}>
			<span className="input-group-text">
				<FontAwesomeIcon className="fas fa-user" icon={icon} />
			</span>
		</div>
	);
};

const LoginForm = (props) => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			rememberMe: false
		},
		onSubmit: async (values, formik) => {
			if (values.email && values.password) {
				props
					.getLogin(values.email, values.password, values.rememberMe || false)
					.catch((err) => formik.setErrors({ error: err }));
			}
		}
	});

	const [ open, setOpen ] = React.useState(false);

	const handleClickErr = () => {
		setOpen(true);
	};

	const handleCloseErr = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const onSubmitTest = () => {
		props.getLogin('free@samuraijs.com', 'free', false).catch((err) => formik.setErrors({ error: err }));
	};

	return (
		<form onSubmit={formik.handleSubmit} className={props.classes.form}>
			<TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				id="email"
				label="Email Address"
				name="email"
				autoComplete="email"
				autoFocus
				onChange={formik.handleChange}
				value={formik.values.email}
			/>
			<TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				name="password"
				label="Password"
				type="password"
				id="password"
				autoComplete="current-password"
				onChange={formik.handleChange}
				value={formik.values.password}
			/>
			<FormControlLabel
				control={<Checkbox value="remember" color="primary" value={formik.values.rememberMe} />}
				label="Remember me"
				className={style.MuiFormControlLabelRoot}
			/>
			<Box mt={3} mb={0.5}>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={props.classes.submit}
					onClick={handleClickErr}
				>
					Sign In
				</Button>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={props.classes.submit}
					onClick={onSubmitTest}
				>
					Test Account
				</Button>
			</Box>
			<Grid container>
				<Grid item xs>
					<Link href="#" variant="body2">
						Forgot password?
					</Link>
				</Grid>
				<Grid item>
					<Link href="#" variant="body2">
						{"Don't have an account? Sign Up"}
					</Link>
				</Grid>
			</Grid>
			{formik.errors.error && (
				<Snackbar open={open} autoHideDuration={6000} onClose={handleCloseErr}>
					<MuiAlert elevation={6} variant="filled" onClose={handleCloseErr} severity="error">
						{formik.errors.error.message}
					</MuiAlert>
				</Snackbar>
			)}
		</form>
	);
};

export default LoginForm;
