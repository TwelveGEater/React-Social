import { userAPI } from './../DAL/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const IN_PROGRESS = 'IN_PROGRESS';

const initialState = {
	usersData: [],
	pageSize: 6,
	totalUsersCount: 12,
	currentPage: 1,
	isFetching: false,
	inProgress: []
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				usersData: state.usersData.map(
					(user) => (user.id === action.userID ? { ...user, followed: true } : user)
				)
			};
		case UNFOLLOW:
			return {
				...state,
				usersData: state.usersData.map(
					(user) => (user.id === action.userID ? { ...user, followed: false } : user)
				)
			};
		case SET_USERS:
			return {
				...state,
				usersData: [ ...action.users ]
			};
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			};
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.totalCount
			};
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			};
		case IN_PROGRESS:
			return {
				...state,
				inProgress: action.isFetching
					? [ ...state.inProgress, action.userID ]
					: state.inProgress.filter((id) => id !== action.userID)
			};
		default:
			return state;
	}
};

export const follow = (userID) => {
	return { type: FOLLOW, userID };
};
export const unfollow = (userID) => {
	return { type: UNFOLLOW, userID };
};
export const setUsers = (users) => {
	return { type: SET_USERS, users };
};

export const setCurrentPage = (currentPage) => {
	return { type: SET_CURRENT_PAGE, currentPage };
};
export const setTotalUsersCount = (totalCount) => {
	return { type: SET_TOTAL_USERS_COUNT, totalCount };
};

export const toggleIsFetching = (isFetching) => {
	return { type: TOGGLE_IS_FETCHING, isFetching };
};
export const toggleInProgress = (isFetching, userID) => {
	return { type: IN_PROGRESS, isFetching, userID };
};

export const getUsers = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		userAPI.getUsers(currentPage, pageSize).then((data) => {
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount));
			dispatch(toggleIsFetching(false));
		});
	};
};

export const followThunk = (userID) => {
	return (dispatch) => {
		dispatch(toggleInProgress(true, userID));
		userAPI.followRequest(userID).then((data) => {
			if (data.resultCode === 0) {
				dispatch(follow(userID));
				dispatch(toggleInProgress(false, userID));
			}
		});
	};
};

export const unfollowThunk = (userID) => {
	return (dispatch) => {
		dispatch(toggleInProgress(true, userID));
		userAPI.unfollowRequest(userID).then((data) => {
			if (data.resultCode === 0) {
				dispatch(unfollow(userID));
				dispatch(toggleInProgress(false, userID));
			}
		});
	};
};

export default usersReducer;
