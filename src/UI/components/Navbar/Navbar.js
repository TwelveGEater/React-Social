import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
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
