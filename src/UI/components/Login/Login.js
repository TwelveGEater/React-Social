import React from 'react';
import style from './Login.module.css';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';

const Login = (props) => {
	if (props.isAuth) return <Redirect to="/profile" />;
	return (
		<div className={style.loginPage}>
			<div className="d-flex justify-content-center h-100">
				<div className={style.card}>
					<div className={style.cardHeader}>
						<h3>Sign In</h3>
						<div className="d-flex justify-content-end social_icon">
							<span>
								<i className="fab fa-facebook-square" />
							</span>
							<span>
								<i className="fab fa-google-plus-square" />
							</span>
							<span>
								<i className="fab fa-twitter-square" />
							</span>
						</div>
					</div>

					<div className="card-body">
						<LoginForm getLogin={props.getLogin} />
					</div>
					<div className="card-footer">
						<div className={'d-flex justify-content-center ' + style.footerSentence}>
							Don't have an account? <a href="#">Sign Up</a>
						</div>

						<div className="d-flex justify-content-center">
							<a href="#">Forgot your password?</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
