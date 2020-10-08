import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBox from '@material-ui/icons/AccountBox';
import MailIcon from '@material-ui/icons/Mail';
import ExitToApp from '@material-ui/icons/ExitToApp';
import logo from '../assets/images/logo.png';
import appBar from '../assets/images/code.png';

const drawerWidth = 240;

const iconsNavBar = [ <AccountBox />, <MailIcon />, <PeopleAltIcon />, <SettingsIcon /> ];

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginRight: drawerWidth
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3)
	},
	listItem: {
		backgroundColor: theme.palette.background.default
	},
	logo: {
		maxWidth: 160
	},
	link: {
		color: 'white'
	}
}));

const AppWrapper = (props) => {
	let history = useHistory();
	const classes = useStyles();
	const goToLoginPage = () => {
		props.getLogout().then(() => {
			history.push(`/login`);
		});
	};
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<img src={logo} alt="logo" className={classes.logo} />
				</Toolbar>
			</AppBar>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				{props.currentContent()}
			</main>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper
				}}
				anchor="right"
			>
				<div className={classes.toolbar} />
				<Divider />
				<List className={classes.listItem}>
					{[ 'profile', 'dialogs', 'users', 'settings' ].map((text, index) => (
						<NavLink to={`/${text}`} activeClassName="selected" style={{ textDecoration: 'none' }}>
							<ListItem button key={text} className={classes.listItem}>
								<ListItemIcon>{iconsNavBar[index]}</ListItemIcon>
								<ListItemText
									primary={
										<Typography type="body2" className={classes.link}>
											{text.charAt(0).toUpperCase() + text.slice(1)}
										</Typography>
									}
								/>
							</ListItem>
						</NavLink>
					))}
				</List>
				<Divider />
				<List className={classes.listItem}>
					{[ 'Logout' ].map((text, index) => (
						<ListItem button key={text} onClick={text === 'Logout' && goToLoginPage}>
							<ListItemIcon>{text === 'Logout' ? <ExitToApp /> : null}</ListItemIcon>
							<ListItemText primary={text} root />
						</ListItem>
					))}
				</List>
			</Drawer>
		</div>
	);
};

export default AppWrapper;
