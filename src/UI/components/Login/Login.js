import React from 'react';
import style from './Login.module.css';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { authAPI } from '../../../DAL/api';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://www.linkedin.com/in/bohdan-lishchenko-4740a11a8/">
				TwelveGEater
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(0, 0, 1.5)
	}
}));

const Login = (props) => {
	const classes = useStyles();

	if (props.isAuth) return <Redirect to={'/profile/' + props.userID} />;

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<div className={style.loginPage}>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<LoginForm classes={classes} getLogin={props.getLogin} getAuthorization={props.getAuthorization} />
				</div>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
};

export default Login;
