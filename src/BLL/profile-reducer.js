import { profileAPI } from './../DAL/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

const initialState = {
	posts: [
		{
			id: 1,
			likeCount: 10,
			postText: 'Hello'
		},
		{
			likeCount: 20,
			postText: "YO! What's up?"
		},
		{
			id: 2,
			likeCount: 100,
			postText: "YO! What's up?"
		},
		{
			id: 3,
			likeCount: 5,
			postText: "YO! What's up?"
		},
		{
			id: 4,
			likeCount: 12,
			postText: "YO! What's up?"
		}
	],
	profile: null,
	userStatus: ''
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [
					...state.posts,
					{
						id: 5,
						likeCount: 0,
						postText: action.newPostText
					}
				]
			};
		case SET_USER_PROFILE:
			return { ...state, profile: action.profile };
		case SET_USER_STATUS:
			return { ...state, userStatus: action.userStatus };
		default:
			return state;
	}
};

export const addPostActionCreator = (newPostText) => {
	return { type: ADD_POST, newPostText };
};

export const setUserProfile = (profile) => {
	return { type: SET_USER_PROFILE, profile };
};

export const setUserStatus = (userStatus) => {
	return { type: SET_USER_STATUS, userStatus };
};

export const getUserProfile = (userID) => (dispatch) => {
	profileAPI.getProfile(userID).then((data) => {
		dispatch(setUserProfile(data));
	});
};

export const getUserStatus = (userID) => (dispatch) => {
	profileAPI.getUserStatus(userID).then((data) => {
		dispatch(setUserStatus(data));
	});
};

export const setStatus = (status) => (dispatch) => {
	profileAPI.setStatus(status).then((data) => {
		if (data.resultCode === 0) {
			dispatch(setUserStatus(status));
		}
	});
};

export default profileReducer;
