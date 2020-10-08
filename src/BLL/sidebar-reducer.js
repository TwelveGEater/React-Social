import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ADD_VISITED_USER = 'react-social/sidebar/ADD-POST';

const initialState = {
	friendList: []
};

const sidebarReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_VISITED_USER:
			return {
				...state,
				friendList:
					[ ...state.friendList, action.userProfile ].length > 3
						? [ ...state.friendList, action.userProfile ].splice(1)
						: [ ...state.friendList, action.userProfile ]
			};
		default:
			return state;
	}
};

export const addVisitedUser = (userProfile) => {
	return { type: ADD_VISITED_USER, userProfile };
};

export default sidebarReducer;
