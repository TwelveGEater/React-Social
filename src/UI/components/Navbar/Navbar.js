import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

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
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3)
	}
}));

const Navbar = (props) => {
	const classes = useStyles();
	return (
		<nav className={style.navbar}>
			<ul className={style.vertical}>
				<li>
					<NavLink activeClassName={style.active} to="/profile">
						Home
					</NavLink>
				</li>
				{props.isAuth ? (
					<li>
						<NavLink activeClassName={style.active} to="/dialogs">
							Messages
						</NavLink>
					</li>
				) : null}
				<li>
					<NavLink activeClassName={style.active} to="/users">
						Users
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName={style.active} to="/settings">
						Settings
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
