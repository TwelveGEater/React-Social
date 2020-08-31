import { userAPI } from './../DAL/api';
import { updateObjectInArray } from './../utils/updateObjectByProp';

const FOLLOW = 'react-social/user/FOLLOW';
const UNFOLLOW = 'react-social/user/UNFOLLOW';
const SET_USERS = 'react-social/user/SET-USERS';
const SET_CURRENT_PAGE = 'react-social/user/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'react-social/user/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'react-social/user/TOGGLE-IS-FETCHING';
const IN_PROGRESS = 'react-social/user/IN_PROGRESS';

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
				usersData: updateObjectInArray(state.usersData, action.userID, 'id', { followed: true })
			};
		case UNFOLLOW:
			return {
				...state,
				usersData: updateObjectInArray(state.usersData, action.userID, 'id', { followed: false })
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

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	dispatch(setCurrentPage(currentPage));
	const data = await userAPI.getUsers(currentPage, pageSize);
	dispatch(setUsers(data.items));
	dispatch(setTotalUsersCount(data.totalCount));
	dispatch(toggleIsFetching(false));
};

async function followUnfollowFlow(dispatch, userID, apiMethod, actionCreator) {
	dispatch(toggleInProgress(true, userID));
	const data = await apiMethod;
	if (data.resultCode === 0) {
		dispatch(actionCreator);
		dispatch(toggleInProgress(false, userID));
	}
}

export const followThunk = (userID) => async (dispatch) => {
	followUnfollowFlow(dispatch, userID, userAPI.followRequest(userID), follow(userID));
};

export const unfollowThunk = (userID) => async (dispatch) => {
	followUnfollowFlow(dispatch, userID, userAPI.unfollowRequest(userID), unfollow(userID));
};

export default usersReducer;
