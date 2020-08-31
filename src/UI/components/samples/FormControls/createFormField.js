import React from 'react';
import { Field } from 'react-final-form';
export const createFormField = (name, validate, component, style, type, placeholder, inputClassName, text) => {
	return (
		<Field name={name} validate={validate} component={component}>
			{({ input, meta }) => (
				<div className={style + (meta.error ? ' errorField' : '')}>
					<input {...input} type={type} placeholder={placeholder} className={inputClassName} />
					{console.log(meta.error)}
					{meta.error && meta.touched && meta.error}
					{text}
				</div>
			)}
		</Field>
	);
};
