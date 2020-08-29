import React from 'react';
import style from './Authorization.module.css';
import { NavLink } from 'react-router-dom';
import { withAuthRedirect } from '../../../../HOC/withAuthRedirect';

const Authorization = (props) => {
	return (
		<div className={style.authorization}>
			<NavLink to="/login">
				<h1>Login</h1>
			</NavLink>
		</div>
	);
};

export default Authorization;
