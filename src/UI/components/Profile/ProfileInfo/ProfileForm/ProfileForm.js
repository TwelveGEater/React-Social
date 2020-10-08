import React from 'react';
import { Field, Form, useField } from 'react-final-form';
import { FORM_ERROR } from 'final-form';

const Error = ({ name }) => {
	const { meta: { touched, error } } = useField(name, { subscription: { touched: true, error: true } });
	return touched && error ? <span>{error}</span> : null;
};

const ProfileForm = (props) => {
	return (
		<Form
			initialValues={props.profile}
			onSubmit={async (values) => props.setProfileData(values).then((error) => console.log(error))}
			validate={(values) => {
				const errors = {};
				return errors;
			}}
			// validate={console.log()}
			render={({ handleSubmit, form, pristine, submitting, values, submitError }) => {
				return (
					<form onSubmit={handleSubmit}>
						{submitError && <div className="error">{submitError}</div>}
						<div>
							<label>Full name:</label>
							<Field name="fullName" component="input" type="text" />
							{/* <Error name="firstName" /> */}
						</div>
						<div>
							<label>About me:</label>
							<Field name="aboutMe" component="input" type="text" />
							{/* <Error name="firstName" /> */}
						</div>
						<div>
							<label>Looking for a job:</label>
							<Field name="lookingForAJob" component="input" type="checkbox" />
							{/* <Error name="firstName" /> */}
						</div>
						{values.lookingForAJob && (
							<div>
								<label>Looking for a job description:</label>
								<Field
									name="lookingForAJobDescription"
									component="input"
									placeholder="lookingForAJobDescription"
								/>
							</div>
						)}

						<div>
							<label>Сontacts:</label>
							{Object.keys(values.contacts).map((key) => (
								<div key={key}>
									<label>{key}</label>
									<Field name={`contacts[${key}]`} component="input" type="text" />
									{/* <Error name="firstName" /> */}
								</div>
							))}
						</div>
						<div className="buttons">
							<button type="submit" disabled={submitting}>
								Submit
							</button>
							<button type="button" onClick={form.reset} disabled={submitting || pristine}>
								Reset
							</button>
						</div>
					</form>
				);
			}}
		/>
	);
};

export default ProfileForm;
