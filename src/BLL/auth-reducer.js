import { authAPI } from '../DAL/api';

const SET_AUTH_DATA = 'SET-AUTH-DATA';

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

export const getAuthorization = () => {
	return (dispatch) => {
		return authAPI.me().then((data) => {
			if (data.resultCode === 0) {
				let { id, email, login } = data.data;
				dispatch(setAuthorizationData(id, email, login, true));
			}
		});
	};
};

export const getLogin = (login, password, rememberMe) => {
	return (dispatch) => {
		authAPI.login(login, password, rememberMe).then((data) => {
			if (data.data.resultCode === 0) {
				dispatch(getAuthorization());
			}
		});
	};
};

export const getLogout = () => {
	return (dispatch) => {
		return authAPI.logout().then((data) => {
			if (data.data.resultCode === 0) {
				dispatch(setAuthorizationData(null, null, null, false));
			}
		});
	};
};

export default authReducer;
