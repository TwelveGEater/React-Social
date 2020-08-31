import React from 'react';
import style from './LoginForm.module.css';
import { Form, Field } from 'react-final-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { createFormField } from './../../samples/FormControls/createFormField';

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
						{inputGroupPrepend(faUser)}
						{createFormField(
							'email',
							required,
							'input',
							style.formBlock,
							'text',
							'Email',
							'form-control',
							null
						)};
					</div>
					<div className="input-group form-group">
						{inputGroupPrepend(faKey)}
						{createFormField(
							'password',
							required,
							'input',
							style.formBlock,
							'password',
							'Password',
							'form-control',
							null
						)};
					</div>
					<div className={'row align-items-center ' + style.remember}>
						{createFormField('rememberMe', null, 'checkbox', null, 'checkbox', null, null, 'Remember me ')}
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

export default LoginForm;
