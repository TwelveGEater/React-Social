import { authAPI } from '../DAL/api';

const SET_AUTH_DATA = 'react-social/auth/SET-AUTH-DATA';

const initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_DATA:
			return {
				...state,
				...action.data,
				isAuth: action.data.isAuth
			};
		default:
			return state;
	}
};

export const setAuthorizationData = (id, email, login, isAuth) => {
	return { type: SET_AUTH_DATA, data: { id, email, login, isAuth } };
};

export const getAuthorization = () => async (dispatch) => {
	const data = await authAPI.me();
	if (data.resultCode === 0) {
		let { id, email, login } = data.data;
		dispatch(setAuthorizationData(id, email, login, true));
	}
	return data;
};

export const getLogin = (login, password, rememberMe) => async (dispatch) => {
	const data = await authAPI.login(login, password, rememberMe);
	if (data.data.resultCode === 0) {
		dispatch(getAuthorization());
	}
};

export const getLogout = () => async (dispatch) => {
	const data = await authAPI.logout();
	if (data.data.resultCode === 0) {
		dispatch(setAuthorizationData(null, null, null, false));
	}
	return data;
};

export default authReducer;
