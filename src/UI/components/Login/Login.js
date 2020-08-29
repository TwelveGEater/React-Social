import React from 'react';
import style from './Login.module.css';
import { Form, Field } from 'react-final-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';

const required = (value) => (value ? undefined : <span className={style.errorMessage}>{'Required'}</span>);

const LoginForm = (props) => {
	return (
		<Form
			initialValues={{
				email: 'test@mail.com',
				password: 'test'
			}}
			onSubmit={(values) => {
				if (values.email && values.password) {
					props.getLogin(values.email, values.password, values.rememberMe || false);
				}
			}}
			render={({ handleSubmit, submitting }) => (
				<form onSubmit={handleSubmit}>
					<div className="input-group form-group">
						<div className={style.inputGroupPrepend}>
							<span className="input-group-text">
								<FontAwesomeIcon className="fas fa-user" icon={faUser} />
							</span>
						</div>
						<Field name="email" validate={required} component="input">
							{({ input, meta }) => (
								<div className={style.formBlock}>
									<input {...input} type="text" placeholder="Email" className="form-control" />
									{meta.error && meta.touched && meta.error}
								</div>
							)}
						</Field>
					</div>
					<div className="input-group form-group">
						<div className={style.inputGroupPrepend}>
							<span className="input-group-text">
								<FontAwesomeIcon className="fas fa-key" icon={faKey} />
							</span>
						</div>
						<Field name="password" validate={required} component="input">
							{({ input, meta }) => (
								<div className={style.formBlock}>
									<input {...input} type="password" placeholder="Password" className="form-control" />
									{meta.error && meta.touched && <span>{meta.error}</span>}
								</div>
							)}
						</Field>
					</div>
					<div className={'row align-items-center ' + style.remember}>
						<Field name="rememberMe" type="checkbox">
							{({ input }) => <input {...input} type="checkbox" name="test" />}
						</Field>Remember me
					</div>
					<div className="form-group">
						<input
							type="submit"
							disabled={submitting}
							value="Login"
							className={'btn float-right ' + style.login_btn}
						/>
					</div>
				</form>
			)}
		/>
	);
};

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
