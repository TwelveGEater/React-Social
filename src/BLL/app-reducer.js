import { authAPI } from '../DAL/api';
import { getUserProfile } from './profile-reducer';
import { getAuthorization } from './auth-reducer';

const APP_INITIALIZATION = 'APP-INITIALIZATION';

const initialState = {
	initializationSuccess: false
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case APP_INITIALIZATION:
			return {
				...state,
				initializationSuccess: true
			};
		default:
			return state;
	}
};

export const initialization = () => {
	return { type: APP_INITIALIZATION };
};

export const appInitialization = () => (dispatch) => {
	const promise = dispatch(getAuthorization());
	Promise.all([ promise ]).then(() => {
		dispatch(initialization());
	});
};

export default appReducer;
